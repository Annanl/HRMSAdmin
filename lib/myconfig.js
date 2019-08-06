var myurl ="http://192.168.137.1:8080/HRMS_war";
function getParam(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] === variable){return pair[1];}
    }
    return(false);
}

function getParamInner(variable)
{
    var query = location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] === variable){
            console.log(decodeURI(pair[1]));
            return decodeURI(pair[1]);}
    }
    return(false);
}

var positionList = [
    {
        id:1,
        name:"领导"
    },{
    id:2,
    name:"管理员"
},{
    id:3,
    name:"教职工"
}
];

function getMenu(position)
{
    if (position === "领导") {
        return [
            {
                name: "部门管理",
                id: "departmentManager",
                iconClass: "el-icon-edit-outline",
                children: [
                    {
                        //name:"部门管理",
                        id: "departmentManager",
                        children: [
                            {
                                name: "部门列表",
                                id: "departmentManager",
                                url: "department/department.html"
                            }
                        ]
                    }
                ]
            },
            {
                name: "员工管理",
                id: "staffManager",
                iconClass: "el-icon-tickets",
                children: [
                    {
                        //name:"在职教职工",
                        id: "staff",
                        children: [
                            {
                                name: "在职教职工",
                                id: "staff",
                                url: "staff/staff.html?position=领导"
                            }
                        ]
                    },
                    {
                        //name:"应聘管理",
                        id: "employment",
                        children: [
                            {
                                name: "应聘管理",
                                id: "employment",
                                url: "staff/employment.html"
                            }
                        ]
                    }
                ]
            }
        ];
    }else if (position === "管理员") {
        return [
            {
                name: "员工管理",
                id: "staffManager",
                iconClass: "el-icon-tickets",
                children: [
                    {
                        //name:"在职教职工",
                        id: "staff",
                        children: [
                            {
                                name: "在职教职工",
                                id: "staff",
                                url: "staff/staff.html?position=管理员"
                            }
                        ]
                    },
                    {
                        //name:"应聘管理",
                        id: "employment",
                        children: [
                            {
                                name: "应聘管理",
                                id: "employment",
                                url: "staff/employment.html"
                            }
                        ]
                    }
                ]
            }
        ];
    }
    return([]);
}
