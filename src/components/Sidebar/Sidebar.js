export const getMenuItems = async () => {
    const response = [
        {
            "id": 1,
            "label": "Dashboard",
            "icon": "hi-view-grid",
            "url": "/dashboard"
        },
        {
            "id": 2,
            "label": "Employee",
            "icon": "bi-people",
            "children": [
                {
                    "id": 21,
                    "label": "Employee List",
                    "url": "/employees/list"
                },
                {
                    "id": 22,
                    "label": "Add Employee",
                    "url": "/employees/add"
                },
                 {
                   id: 23,
                   label: "Profile Overview",
                   url: "/employees/profile",
              },
               {
          id: 24,
          label: "Edit Employee",
          url: "/employees/edit",
        },
        {
          id: 25,
          label: "Documents",
          url: "/employees/documents",
        },
        {
          id: 26,
          label: "Status & History",
          url: "/employees/status-history",
        },
            ]
        },

          {
           id: 4,
           label: "Leaves",
           icon: "leaves-outline",
           url: "/leaves",
         },
         {
       id: 5,
       label: "Review",
       icon: "review-outline",
       url: "/review",
        },

        {
            "id": 3,
            "label": "Settings",
            "icon": "bi-gear",
            "children": [
                {
                    "id": 31,
                    "label": "Profile",
                    "url": "/settings/profile"
                },
                {
                    "id": 32,
                    "label": "Security",
                    "url": "/settings/security"
                }
            ]
        }
    ]

    return response;
};
