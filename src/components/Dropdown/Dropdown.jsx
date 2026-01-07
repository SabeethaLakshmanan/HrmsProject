import { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import "./Dropdown.css";

const Dropdown = ({
  id,
  placeholder = "Select",
  options = [],
  value = "",
  onChange,
  openDropdown,
  setOpenDropdown,
}) => {
  const isOpen = openDropdown === id;

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isTyping) return;

    const selected = options.find(
      (opt) => String(opt.id) === String(value)
    );
    setSearchTerm(selected ? selected.name : "");
  }, [value, options, isTyping]);

  useEffect(() => {
    if (!isTyping) {
      setFilteredOptions(options);
      return;
    }

    const filtered = options.filter((opt) =>
      opt.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm, options, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.select(), 0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setOpenDropdown(null);
        setIsTyping(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, setOpenDropdown]);

  const handleToggle = () => {
    setOpenDropdown(isOpen ? null : id);
  };

  const handleSelect = (opt) => {
    onChange(opt.id);
    setSearchTerm(opt.name);
    setIsTyping(false);
    setOpenDropdown(null);
  };

  return (
    <div className="dropdown" ref={wrapperRef}>
      <div
        className="dropdown-box"
        onClick={(e) => {
          if (e.target.tagName !== "INPUT") handleToggle();
        }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onClick={(e) => {
            e.stopPropagation();
            setOpenDropdown(isOpen ? null : id);
          }}
          onChange={(e) => {
            const val = e.target.value;
            setIsTyping(true);
            setSearchTerm(val);

            if (!isOpen) setOpenDropdown(id);
            if (val === "") onChange("");
          }}
        />

        <IoChevronDown
          className={`arrow ${isOpen ? "rotate" : ""}`}
          size={16}
        />
      </div>

      {isOpen && (
        <ul className="dropdown-list">
          {filteredOptions.length === 0 ? (
            <li className="no-option">No results</li>
          ) : (
            filteredOptions.map((opt) => (
              <li
                key={opt.id}
                onClick={() => handleSelect(opt)}
                className={
                  String(value) === String(opt.id) ? "selected" : ""
                }
              >
                {opt.name}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
