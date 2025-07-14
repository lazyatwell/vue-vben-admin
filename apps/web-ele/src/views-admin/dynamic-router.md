```json
{
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "name": "Project",
      "path": "/project",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "项目配置",
        "icon": "404",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "Index",
          "path": "index",
          "hidden": true,
          "component": "FreezeManagementPlatform/backstageManage/variableConfig/index",
          "meta": {
            "title": "设备变量配置",
            "icon": "component",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "BigScreenComponents",
          "path": "bigScreenComponents",
          "hidden": false,
          "component": "system/title/components",
          "meta": {
            "title": "大屏组件",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "ProjectInfo",
          "path": "projectInfo",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/projectInfo/index",
          "meta": {
            "title": "项目信息配置",
            "icon": "client",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "/title",
          "path": "/title",
          "hidden": false,
          "component": "system/title/index",
          "meta": {
            "title": "项目标题配置",
            "icon": "date",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "/large-screen",
          "path": "/large-screen",
          "hidden": true,
          "component": "FreezeManagementPlatform/backstageManage/large-screen/index",
          "meta": {
            "title": "大屏看板配置",
            "icon": "client",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "Front",
      "path": "/front",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "前台大屏展板",
        "icon": "build",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "Overview",
          "path": "Overview",
          "hidden": false,
          "component": "FreezeManagementPlatform(kailuan)/bigScreen/frontDisplayPage/overview/index",
          "meta": {
            "title": "项目概览",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Skill",
          "path": "Skill",
          "hidden": false,
          "component": "FreezeManagementPlatform(kailuan)/bigScreen/frontDisplayPage/skill/index",
          "meta": {
            "title": "技术管理",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Mass",
          "path": "Mass",
          "hidden": false,
          "component": "FreezeManagementPlatform(kailuan)/bigScreen/frontDisplayPage/qualityControl/index",
          "meta": {
            "title": "质量管理",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Safe",
          "path": "Safe",
          "hidden": false,
          "component": "FreezeManagementPlatform(kailuan)/bigScreen/frontDisplayPage/safetyManagement/index",
          "meta": {
            "title": "安全管理",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "WellboreManagement",
      "path": "/wellboreManagement",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "井筒管理",
        "icon": "dire",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "WellboreManagement/designParameterConfig",
          "path": "wellboreManagement/designParameterConfig",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/wellboreManagement/designParameterConfig",
          "meta": {
            "title": "井筒设计参数配置",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "WellboreManagement/inclinometerData",
          "path": "wellboreManagement/inclinometerData",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/wellboreManagement/inclinometerData",
          "meta": {
            "title": "测斜数据上传",
            "icon": "dire",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "WellboreManagement/inclinometerPlane",
          "path": "wellboreManagement/inclinometerPlane",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/wellboreManagement/inclinometerPlane",
          "meta": {
            "title": "偏斜平面图上传",
            "icon": "dire",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "Frozen-model",
          "path": "frozen-model",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/frozen-model/index",
          "meta": {
            "title": "土层模型",
            "icon": "client",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "WellboreManagement/paragraph",
          "path": "wellboreManagement/paragraph",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/wellboreManagement/segmentation/index",
          "meta": {
            "title": "工程分段配置",
            "icon": "client",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Geological",
          "path": "geological",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/wellboreManagement/geological/index",
          "meta": {
            "title": "地质信息填报",
            "icon": "edit",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "path": "/",
      "hidden": false,
      "component": "Layout",
      "children": [
        {
          "name": "Class",
          "path": "class",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/manager/index",
          "meta": {
            "title": "值班管理",
            "icon": "bug",
            "noCache": true,
            "link": null
          }
        }
      ]
    },
    {
      "path": "/",
      "hidden": true,
      "component": "Layout",
      "children": [
        {
          "name": "Shaft",
          "path": "shaft",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/ProgressManage/indexshaft.vue",
          "meta": {
            "title": "井筒进度配置",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "path": "/",
      "hidden": true,
      "component": "Layout",
      "children": [
        {
          "name": "AppManagement",
          "path": "appManagement",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/appManagement/index",
          "meta": {
            "title": "管理App",
            "icon": "table",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "Drilling",
      "path": "/drilling",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "钻进进度",
        "icon": "build",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "DrillingProgressIndex",
          "path": "drillingProgressIndex",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/drillProgress/drillProgressStatistics",
          "meta": {
            "title": "钻进进度统计",
            "icon": "date",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "DrillingProgressIndexInside",
          "path": "drillingProgressIndexInside",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/drillProgress/drillProgressDetail",
          "meta": {
            "title": "钻进进度详情",
            "icon": "button",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "path": "/",
      "hidden": true,
      "component": "Layout",
      "children": [
        {
          "name": "DataBoardConfig",
          "path": "dataBoardConfig",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/dataDisplayBoardConfig/index",
          "meta": {
            "title": "数据展板配置",
            "icon": "documentation",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "EleManage",
      "path": "/eleManage",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "电能管理",
        "icon": "druid",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "EleDataStatistic",
          "path": "eleDataStatistic",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/eleEnergyManage/eleDataStatistic/index",
          "meta": {
            "title": "电能统计",
            "icon": "clipboard",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "Progress",
      "path": "/progress",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "分部分项计划管理",
        "icon": "swagger",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "Freeze",
          "path": "freeze",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/ProgressManage/indexfreeze.vue",
          "meta": {
            "title": "进度配置",
            "icon": "color",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "ProgressAlarm",
          "path": "progressAlarm",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/ProgressManage/progressAlarm.vue",
          "meta": {
            "title": "进度预警",
            "icon": "dire",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "ProgressReporting",
          "path": "progressReporting",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/ProgressManage/progressReporting.vue",
          "meta": {
            "title": "施工日志",
            "icon": "education",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "ProgressThreeD",
          "path": "progressThreeD",
          "hidden": true,
          "component": "FreezeManagementPlatform/backstageManage/ProgressManage/progressThreeD.vue",
          "meta": {
            "title": "进度模型绑定",
            "icon": "#",
            "noCache": true,
            "link": null
          }
        }
      ]
    },
    {
      "path": "/",
      "hidden": true,
      "component": "Layout",
      "children": [
        {
          "name": "DictionaryManage",
          "path": "dictionaryManage",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/dictionaryManaged/index",
          "meta": {
            "title": "冻结字典管理",
            "icon": "dict",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "path": "/",
      "hidden": false,
      "component": "Layout",
      "children": [
        {
          "name": "ParticipantOrganizationManagement",
          "path": "participantOrganizationManagement",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/participantOrganizationManagement/index",
          "meta": {
            "title": "参建单位配置",
            "icon": "button",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "Application",
      "path": "/application",
      "hidden": true,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "应用管理",
        "icon": "chart",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "AccessManager",
          "path": "accessManager",
          "hidden": false,
          "component": "EnvironmentManagementPlatform/backstage/accessManager/index.vue",
          "meta": {
            "title": "门禁管理",
            "icon": "client",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "WebCamera",
          "path": "webCamera",
          "hidden": false,
          "component": "EnvironmentManagementPlatform/backstage/webcamManager/index.vue",
          "meta": {
            "title": "能耗管理",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "FreeReport",
          "path": "freeReport",
          "hidden": false,
          "component": "EnvironmentManagementPlatform/backstage/freeReport/freeReportMange.vue",
          "meta": {
            "title": "报表管理",
            "icon": "date",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "WebcamManager",
          "path": "webcamManager",
          "hidden": false,
          "component": "EnvironmentManagementPlatform/backstage/webcamManager/index.vue",
          "meta": {
            "title": "视频管理",
            "icon": "eye",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "path": "/",
      "hidden": false,
      "component": "Layout",
      "children": [
        {
          "name": "High-risk/index",
          "path": "high-risk/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/highRisk/index",
          "meta": {
            "title": "高风险作业管理",
            "icon": "button",
            "noCache": true,
            "link": null
          }
        }
      ]
    },
    {
      "name": "ContingencyManagement",
      "path": "/contingencyManagement",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "应急管理",
        "icon": "build",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "InformationRelease",
          "path": "InformationRelease",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/contingencyManagement/informationRelease/index",
          "meta": {
            "title": "应急信息发布",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "EnvironmentalMonitoring",
      "path": "/environmentalMonitoring",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "环境管理",
        "icon": "documentation",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "Device",
          "path": "device",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/EnvironmentalMonitoring/device/index.vue",
          "meta": {
            "title": "监测设备",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Mrecode",
          "path": "mrecode",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/EnvironmentalMonitoring/mrecord/index.vue",
          "meta": {
            "title": "实时数据",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Alarmrecord",
          "path": "alarmrecord",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/EnvironmentalMonitoring/alarmrecord/index.vue",
          "meta": {
            "title": "报警统计",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "Attendance",
      "path": "/attendance",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "人员管理",
        "icon": "peoples",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "Person/index",
          "path": "person/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/attendance/person/index",
          "meta": {
            "title": "人员信息",
            "icon": "#",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "Train/index",
          "path": "train/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/attendance/train/index",
          "meta": {
            "title": "安全培训",
            "icon": "#",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "Record/index",
          "path": "record/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/attendance/record/index",
          "meta": {
            "title": "出勤管理",
            "icon": "#",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "StaffLocationDevice",
          "path": "staffLocationDevice",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/staffLocationDevice/index",
          "meta": {
            "title": "人员定位设备绑定",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "CertificateManagement",
          "path": "certificateManagement",
          "hidden": false,
          "component": "manage/certificateManagement/index",
          "meta": {
            "title": "资格证书管理",
            "icon": "github",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "PlanManage",
      "path": "/planManage",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "掘进形象进度管理",
        "icon": "#",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "TaskSubitem",
          "path": "taskSubitem",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/PlanManage/taskConfig/index",
          "meta": {
            "title": "任务分项管理",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "MonthPlan",
          "path": "monthPlan",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/PlanManage/monthTask/index",
          "meta": {
            "title": "月计划填报",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "ProductionDaily",
          "path": "productionDaily",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/PlanManage/dailyConfig/index",
          "meta": {
            "title": "生产日报填报",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "QualityManage",
      "path": "/qualityManage",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "质量管理",
        "icon": "cascader",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "MyInspect",
          "path": "myInspect",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/QualityManage/MyInspect/index",
          "meta": {
            "title": "我的检查",
            "icon": "client",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "ToRectify",
          "path": "toRectify",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/QualityManage/ToRectify/index",
          "meta": {
            "title": "待整改",
            "icon": "job",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "ToCheck",
          "path": "toCheck",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/QualityManage/ToCheck/index",
          "meta": {
            "title": "待检查",
            "icon": "checkbox",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "ConfigItemCheck",
          "path": "configItemCheck",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/QualityManage/ConfigItemCheck/index",
          "meta": {
            "title": "检查项配置",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "ProblemClassification",
          "path": "problemClassification",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/QualityManage/ProblemClassification/index",
          "meta": {
            "title": "问题分类配置",
            "icon": "druid",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "AttendanceManage",
      "path": "/attendanceManage",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "考勤管理（旧）",
        "icon": "peoples",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "SinglePersonnelManagement",
          "path": "singlePersonnelManagement",
          "hidden": true,
          "component": "FreezeManagementPlatform/backstageManage/AttendanceManagement/PersonnelManagement/index.vue",
          "meta": {
            "title": "人员信息",
            "icon": "peoples",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "UndergroundPersonnel",
          "path": "undergroundPersonnel",
          "hidden": true,
          "component": "FreezeManagementPlatform/backstageManage/AttendanceManagement/UndergroundPersonnel/index.vue",
          "meta": {
            "title": "井下人员发布",
            "icon": "people",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "AttendanceRecord",
          "path": "attendanceRecord",
          "hidden": true,
          "component": "FreezeManagementPlatform/backstageManage/AttendanceManagement/AttendanceRecord/index.vue",
          "meta": {
            "title": "考勤记录",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "AttendanceInfor",
          "path": "attendanceInfor",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/AttendanceManagement/attendanceInfor/index.vue",
          "meta": {
            "title": "值班班组信息",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "SafetyManage",
      "path": "/safetyManage",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "安全管理",
        "icon": "server",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "MyInspect",
          "path": "myInspect",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/SafetyManage/MyInspect/index",
          "meta": {
            "title": "我的检查",
            "icon": "education",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "ToRectify",
          "path": "toRectify",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/SafetyManage/ToRectify/index",
          "meta": {
            "title": "待整改",
            "icon": "checkbox",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "ToCheck",
          "path": "toCheck",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/SafetyManage/ToCheck/index",
          "meta": {
            "title": "待检查",
            "icon": "edit",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "Cycle/task",
          "path": "cycle/task",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/SafetyManage/Task/index",
          "meta": {
            "title": "安全巡检",
            "icon": "example",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "ConfigItemCheck",
          "path": "configItemCheck",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/SafetyManage/ConfigItemCheck/index",
          "meta": {
            "title": "检查项配置",
            "icon": "dire",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "ProblemClassification",
          "path": "problemClassification",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/SafetyManage/ProblemClassification/index",
          "meta": {
            "title": "问题分类配置",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "MaterialManage",
      "path": "/MaterialManage",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "物资管理",
        "icon": "build",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "Supplier/index",
          "path": "supplier/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/materialManage/supplier/index",
          "meta": {
            "title": "供应商名称",
            "icon": "#",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "MaterialLedger",
          "path": "materialLedger",
          "hidden": false,
          "redirect": "noRedirect",
          "component": "ParentView",
          "alwaysShow": true,
          "meta": {
            "title": "物资台账",
            "icon": "#",
            "noCache": false,
            "link": null
          },
          "children": [
            {
              "name": "MaterialManage",
              "path": "materialManage",
              "hidden": false,
              "component": "FreezeManagementPlatform/backstageManage/materialManage/manage/index.vue",
              "meta": {
                "title": "台账记录",
                "icon": "#",
                "noCache": false,
                "link": null
              }
            },
            {
              "name": "MaterialType",
              "path": "materialType",
              "hidden": false,
              "component": "FreezeManagementPlatform/backstageManage/materialManage/type/index.vue",
              "meta": {
                "title": "物资类型管理",
                "icon": "#",
                "noCache": false,
                "link": null
              }
            },
            {
              "name": "MaterialCheckList",
              "path": "materialCheckList",
              "hidden": true,
              "component": "FreezeManagementPlatform/backstageManage/materialManage/checklist/index.vue",
              "meta": {
                "title": "检查项配置",
                "icon": "#",
                "noCache": true,
                "link": null
              }
            },
            {
              "name": "MaterialConsume",
              "path": "materialConsume",
              "hidden": true,
              "component": "FreezeManagementPlatform/backstageManage/materialManage/consume/index.vue",
              "meta": {
                "title": "耗材配置",
                "icon": "#",
                "noCache": true,
                "link": null
              }
            },
            {
              "name": "RepositoryRecordOutIn",
              "path": "repositoryRecordOutIn",
              "hidden": true,
              "component": "FreezeManagementPlatform/backstageManage/materialManage/repositoryRecordOutIn/index.vue",
              "meta": {
                "title": "物资出入库明细",
                "icon": "#",
                "noCache": true,
                "link": null
              }
            },
            {
              "name": "Consumption",
              "path": "consumption",
              "hidden": false,
              "component": "FreezeManagementPlatform/backstageManage/materialManage/materialConsumption/index.vue",
              "meta": {
                "title": "材料消耗明细",
                "icon": "#",
                "noCache": false,
                "link": null
              }
            }
          ]
        },
        {
          "name": "MaterialRepositoryRecord",
          "path": "materialRepositoryRecord",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/materialManage/repositoryRecord/index.vue",
          "meta": {
            "title": "物资入库记录",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "EntryManage",
      "path": "/entryManage",
      "hidden": true,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "出入库管理",
        "icon": "search",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "SpareParts",
          "path": "spareParts",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/InAndOutManagement/SpareSparts/index",
          "meta": {
            "title": "备件台账",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Record",
          "path": "record",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/InAndOutManagement/InOutRecord/index",
          "meta": {
            "title": "出入库记录",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "path": "/",
      "hidden": true,
      "component": "Layout",
      "children": [
        {
          "name": "Price",
          "path": "price",
          "hidden": false,
          "component": "MineConstruction/single/eleWaterPrice",
          "meta": {
            "title": "水电费管理",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "ModelManagement",
      "path": "/modelManagement",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "模型管理",
        "icon": "build",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "ModelCatalog",
          "path": "modelCatalog",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/modelManagement/modelCatalog/catelog",
          "meta": {
            "title": "模型目录管理",
            "icon": "clipboard",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Upload",
          "path": "upload",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/modelManagement/modelUpload/upload",
          "meta": {
            "title": "模型上传",
            "icon": "chart",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "ModelDataAssociation",
          "path": "modelDataAssociation",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/modelManagement/modelDataAssociation/index",
          "meta": {
            "title": "模型数据关联",
            "icon": "build",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "ModelAndPage",
          "path": "modelAndPage",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/modelManagement/modelAndPage",
          "meta": {
            "title": "模型与页面绑定",
            "icon": "list",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "Video",
      "path": "/video",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "视频监控",
        "icon": "radio",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "VideoConfig",
          "path": "videoConfig",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/videoMonitor/videoConfig/index-new",
          "meta": {
            "title": "视频配置",
            "icon": "chart",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "VideoMonitor",
          "path": "videoMonitor",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/videoMonitor/VideoMonitor/index",
          "meta": {
            "title": "视频监控",
            "icon": "radio",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "VideoPageConfig",
          "path": "videoPageConfig",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/videoMonitor/videoPageConfig/index",
          "meta": {
            "title": "视频菜单配置",
            "icon": "clipboard",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "AIAlarm",
          "path": "AIAlarm",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/videoMonitor/AIAlarm/index",
          "meta": {
            "title": "AI报警",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "path": "/",
      "hidden": false,
      "component": "Layout",
      "children": [
        {
          "name": "Model-list",
          "path": "model-list",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/model-list/index",
          "meta": {
            "title": "冻结站场景关联变量",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "path": "/",
      "hidden": false,
      "component": "Layout",
      "children": [
        {
          "name": "Report",
          "path": "report",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/reportManager/freeReport/freeReportMange",
          "meta": {
            "title": "报表管理",
            "icon": "form",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "EquipManage",
      "path": "/equipManage",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "设备管理",
        "icon": "client",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "EquipAccount/index",
          "path": "EquipAccount/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/EquipManage/EquipAccount/index",
          "meta": {
            "title": "设备台账",
            "icon": "checkbox",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "EquipInspection/index",
          "path": "EquipInspection/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/EquipManage/EquipInspection/index",
          "meta": {
            "title": "设备巡检",
            "icon": "color",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "EquipMaintenance/index",
          "path": "EquipMaintenance/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/EquipManage/EquipMaintenance/index",
          "meta": {
            "title": "设备保养",
            "icon": "dict",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "EquipRepair/index",
          "path": "EquipRepair/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/EquipManage/EquipRepair/index",
          "meta": {
            "title": "设备检修",
            "icon": "druid",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "InspectionStandard/index",
          "path": "inspectionStandard/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/EquipManage/inspectionStandard/index",
          "meta": {
            "title": "检查标准",
            "icon": "druid",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "path": "/",
      "hidden": true,
      "component": "Layout",
      "children": [
        {
          "name": "/measure/index",
          "path": "/measure/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/measure/index",
          "meta": {
            "title": "测量标准管理",
            "icon": "checkbox",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "ProblemCategory",
      "path": "/problemCategory",
      "hidden": true,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "问题分类",
        "icon": "question",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "InspectItem",
          "path": "inspectItem",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/problem/InspectItem/index",
          "meta": {
            "title": "检查项配置",
            "icon": "bug",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "ProblemCategory",
          "path": "problemCategory",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/problem/ProblemCategory/index",
          "meta": {
            "title": "问题分类配置",
            "icon": "client",
            "noCache": true,
            "link": null
          }
        }
      ]
    },
    {
      "name": "Skill",
      "path": "/skill",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "技术质量管理",
        "icon": "bug",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "System/index",
          "path": "system/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/skill/system/index",
          "meta": {
            "title": "技术体系管理",
            "icon": "#",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "Build/index",
          "path": "build/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/skill/build/index",
          "meta": {
            "title": "施工过程管理",
            "icon": "#",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "Raw/index",
          "path": "raw/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/skill/raw/index",
          "meta": {
            "title": "原材料质量管理",
            "icon": "#",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "Acceptance/index",
          "path": "acceptance/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/skill/acceptance/index",
          "meta": {
            "title": "质量验收管理",
            "icon": "#",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "Risk/index",
          "path": "risk/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/skill/risk/index",
          "meta": {
            "title": "风险管理",
            "icon": "#",
            "noCache": true,
            "link": null
          }
        }
      ]
    },
    {
      "name": "Board",
      "path": "/board",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "冻结看板配置",
        "icon": "clipboard",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "DisplayBoardConfig",
          "path": "displayBoardConfig",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/projectBoard/displayBoardConfig",
          "meta": {
            "title": "展板配置",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "ModelConfig",
          "path": "modelConfig",
          "hidden": true,
          "component": "FreezeManagementPlatform/backstageManage/projectBoard/modelConfig/index",
          "meta": {
            "title": "参数化建模配置",
            "icon": "upload",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "FreezeConfig",
          "path": "freezeConfig",
          "hidden": true,
          "component": "FreezeManagementPlatform/backstageManage/projectBoard/freezeSceneConfig/index",
          "meta": {
            "title": "冻结站场景配置",
            "icon": "component",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "ProcessFlowConfig",
          "path": "processFlowConfig",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/projectBoard/processFlowConfig/index",
          "meta": {
            "title": "工艺流程图配置",
            "icon": "druid",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "FreezePeriodConfig",
          "path": "freezePeriodConfig",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/projectBoard/freezePeriodConfig",
          "meta": {
            "title": "冻结期配置",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "FreezeSubsystemConfig",
          "path": "freezeSubsystemConfig",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/projectBoard/freezeSubsystemConfig",
          "meta": {
            "title": "子系统配置",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "HazardIdentificationManagement",
      "path": "/hazardIdentificationManagement",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "危险源辨识",
        "icon": "list",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "RiskResponsibilitySystem",
          "path": "riskResponsibilitySystem",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/hazardIdentificationManagement/RiskResponsibilitySystem/index",
          "meta": {
            "title": "风险责任体系",
            "icon": "404",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "HazardIdentificationAndAssessment",
          "path": "HazardIdentificationAndAssessment",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/hazardIdentificationManagement/HazardIdentificationAndAssessment/index",
          "meta": {
            "title": "危险源辨识评估",
            "icon": "404",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "HazardIdentificationChecklist",
          "path": "HazardIdentificationChecklist",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/hazardIdentificationManagement/HazardIdentificationChecklist/index",
          "meta": {
            "title": "危险源辨识清单",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "RiskIocationConfiguration",
          "path": "RiskIocationConfiguration",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/hazardIdentificationManagement/RiskIocationConfiguration/index",
          "meta": {
            "title": "风险地点配置",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "RiskTypeConfiguration",
          "path": "RiskTypeConfiguration",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/hazardIdentificationManagement/RiskTypeConfiguration/index",
          "meta": {
            "title": "风险类型配置",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "DataAcquisitionConfiguration",
      "path": "/dataAcquisitionConfiguration",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "项目数采配置",
        "icon": "build",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "GroupManage",
          "path": "groupManage",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/dataAcquisitionConfiguration/groupManage/index",
          "meta": {
            "title": "分组管理",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "DeviceManage",
          "path": "deviceManage",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/dataAcquisitionConfiguration/deviceManage/index",
          "meta": {
            "title": "设备管理",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "DataLakeDict",
          "path": "dataLakeDict",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/dataAcquisitionConfiguration/dataLakeDict/index",
          "meta": {
            "title": "数据湖字典",
            "icon": "checkbox",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "Mineboard",
      "path": "/mineboard",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "矿建看板配置",
        "icon": "clipboard",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "MineDisplayBoardConfig",
          "path": "mineDisplayBoardConfig",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/projectBoard/mineDisplayBoardConfig",
          "meta": {
            "title": "展板配置",
            "icon": "#",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "MinesystemConfig",
          "path": "minesystemConfig",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/projectBoard/mineSystemConfig",
          "meta": {
            "title": "子系统配置",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "path": "/",
      "hidden": false,
      "component": "Layout",
      "children": [
        {
          "name": "Cost/index",
          "path": "cost/index",
          "hidden": false,
          "component": "FreezeManagementPlatform/backstageManage/cost/index",
          "meta": {
            "title": "生产经营",
            "icon": "education",
            "noCache": true,
            "link": null
          }
        }
      ]
    },
    {
      "name": "Configure",
      "path": "/configure",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "参数配置",
        "icon": "build",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "ProtocolConfiguration",
          "path": "protocolConfiguration",
          "hidden": false,
          "component": "manage/configure/protocolConfiguration",
          "meta": {
            "title": "规约配置",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "OtherConfiguration",
          "path": "otherConfiguration",
          "hidden": false,
          "component": "manage/configure/otherConfiguration",
          "meta": {
            "title": "其他参数配置",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "StatusDescriptionDictionary",
          "path": "statusDescriptionDictionary",
          "hidden": false,
          "component": "manage/configure/statusDescriptionDictionary",
          "meta": {
            "title": "状态描述词典",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "RealTimeData",
          "path": "realTimeData",
          "hidden": false,
          "component": "manage/configure/collectRealTimeData",
          "meta": {
            "title": "实时数据",
            "icon": "detail",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Maintenance",
          "path": "maintenance",
          "hidden": false,
          "component": "manage/configure/maintenance",
          "meta": {
            "title": "维护调试",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Real/index",
          "path": "real/index",
          "hidden": false,
          "component": "alarm/real/index",
          "meta": {
            "title": "实时报警",
            "icon": "chart",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "History/index",
          "path": "history/index",
          "hidden": false,
          "component": "alarm/history/index",
          "meta": {
            "title": "报警历史",
            "icon": "message",
            "noCache": true,
            "link": null
          }
        }
      ]
    },
    {
      "name": "Alarm",
      "path": "/alarm",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "报警发送管理",
        "icon": "bug",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "Poke/index",
          "path": "poke/index",
          "hidden": false,
          "component": "alarm/poke/index",
          "meta": {
            "title": "推送方式",
            "icon": "dire",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "User/index",
          "path": "user/index",
          "hidden": false,
          "component": "alarm/user/alarmDoubleIndex",
          "meta": {
            "title": "报警用户",
            "icon": "peoples",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "Relation/index",
          "path": "relation/index",
          "hidden": false,
          "component": "alarm/relation/index",
          "meta": {
            "title": "报警关联",
            "icon": "cascader",
            "noCache": true,
            "link": null
          }
        },
        {
          "name": "Send/index",
          "path": "send/index",
          "hidden": false,
          "component": "alarm/send/index",
          "meta": {
            "title": "发送记录",
            "icon": "cascader",
            "noCache": true,
            "link": null
          }
        }
      ]
    },
    {
      "name": "DataAcquisition",
      "path": "/dataAcquisition",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "基础配置",
        "icon": "upload",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "1",
          "path": "1",
          "hidden": false,
          "redirect": "noRedirect",
          "component": "ParentView",
          "alwaysShow": true,
          "meta": {
            "title": "数据管理",
            "icon": "cascader",
            "noCache": false,
            "link": null
          },
          "children": [
            {
              "name": "DeviceConfiguration",
              "path": "deviceConfiguration",
              "hidden": false,
              "component": "BasicManagement/acquisitionManage/deviceConfiguration/index.vue",
              "meta": {
                "title": "设备管理",
                "icon": "checkbox",
                "noCache": false,
                "link": null
              }
            },
            {
              "name": "VariableConfiguration",
              "path": "variableConfiguration",
              "hidden": false,
              "component": "BasicManagement/acquisitionManage/variableConfiguration/index",
              "meta": {
                "title": "变量管理",
                "icon": "cascader",
                "noCache": false,
                "link": null
              }
            },
            {
              "name": "RealTime",
              "path": "realTime",
              "hidden": false,
              "component": "BasicManagement/acquisitionManage/show/index",
              "meta": {
                "title": "实时数据",
                "icon": "date-range",
                "noCache": false,
                "link": null
              }
            }
          ]
        },
        {
          "name": "Graph",
          "path": "graph",
          "hidden": false,
          "redirect": "noRedirect",
          "component": "ParentView",
          "alwaysShow": true,
          "meta": {
            "title": "组态管理",
            "icon": "tree",
            "noCache": false,
            "link": null
          },
          "children": [
            {
              "name": "Configuration",
              "path": "configuration",
              "hidden": false,
              "component": "BasicManagement/graphConfiguration/dispose",
              "meta": {
                "title": "组态配置",
                "icon": "build",
                "noCache": false,
                "link": null
              }
            },
            {
              "name": "NonStandardElement",
              "path": "nonStandardElement",
              "hidden": false,
              "component": "BasicManagement/graphConfiguration/nonStandardElement",
              "meta": {
                "title": "非标图元",
                "icon": "form",
                "noCache": false,
                "link": null
              }
            }
          ]
        },
        {
          "name": "Alamservice",
          "path": "alamservice",
          "hidden": true,
          "redirect": "noRedirect",
          "component": "ParentView",
          "alwaysShow": true,
          "meta": {
            "title": "告警管理",
            "icon": "chart",
            "noCache": false,
            "link": null
          },
          "children": [
            {
              "name": "AlarmUser",
              "path": "alarmUser",
              "hidden": false,
              "component": "BasicManagement/alarmManage/alarmUser/index",
              "meta": {
                "title": "告警用户",
                "icon": "peoples",
                "noCache": false,
                "link": null
              }
            },
            {
              "name": "PushMode",
              "path": "pushMode",
              "hidden": false,
              "component": "BasicManagement/alarmManage/pushMode/index",
              "meta": {
                "title": "告警推送",
                "icon": "upload",
                "noCache": false,
                "link": null
              }
            },
            {
              "name": "AlarmType",
              "path": "alarmType",
              "hidden": true,
              "component": "BasicManagement/alarmManage/alarmType/index",
              "meta": {
                "title": "告警类型",
                "icon": "dashboard",
                "noCache": false,
                "link": null
              }
            },
            {
              "name": "AlarmRules",
              "path": "alarmRules",
              "hidden": false,
              "component": "BasicManagement/alarmManage/alarmRules",
              "meta": {
                "title": "告警规则",
                "icon": "clipboard",
                "noCache": false,
                "link": null
              }
            },
            {
              "name": "AlarmCorrelation",
              "path": "alarmCorrelation",
              "hidden": false,
              "component": "BasicManagement/alarmManage/alarmCorrelation/index",
              "meta": {
                "title": "告警关联",
                "icon": "swagger",
                "noCache": false,
                "link": null
              }
            },
            {
              "name": "AlarmHistory",
              "path": "alarmHistory",
              "hidden": false,
              "component": "BasicManagement/alarmManage/alarmHistory/index",
              "meta": {
                "title": "告警历史",
                "icon": "bug",
                "noCache": false,
                "link": null
              }
            },
            {
              "name": "SendHistory",
              "path": "sendHistory",
              "hidden": false,
              "component": "BasicManagement/alarmManage/sendHistory/index",
              "meta": {
                "title": "告警发送详情",
                "icon": "guide",
                "noCache": false,
                "link": null
              }
            },
            {
              "name": "RealtimeAlarm",
              "path": "realtimeAlarm",
              "hidden": false,
              "component": "BasicManagement/alarmManage/realtimeAlarm/index",
              "meta": {
                "title": "实时告警",
                "icon": "client",
                "noCache": false,
                "link": null
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Authority",
      "path": "/authority",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "用户权限",
        "icon": "peoples",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "User",
          "path": "user",
          "hidden": false,
          "component": "system/user/index",
          "meta": {
            "title": "用户管理",
            "icon": "user",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Role",
          "path": "role",
          "hidden": false,
          "component": "system/role/index",
          "meta": {
            "title": "角色管理",
            "icon": "peoples",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Dept",
          "path": "dept",
          "hidden": false,
          "component": "system/dept/index",
          "meta": {
            "title": "组织机构",
            "icon": "tree",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Post",
          "path": "post",
          "hidden": false,
          "component": "system/post/index",
          "meta": {
            "title": "岗位管理",
            "icon": "post",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "Cost",
      "path": "/cost",
      "hidden": true,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "成本管理",
        "icon": "date",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "CostManage",
          "path": "costManage",
          "hidden": false,
          "component": "MineConstruction/single/Cost/index",
          "meta": {
            "title": "成本管理",
            "icon": "client",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "System",
      "path": "/system",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "系统管理",
        "icon": "system",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "Menu",
          "path": "menu",
          "hidden": false,
          "component": "system/menu/index",
          "meta": {
            "title": "菜单管理",
            "icon": "tree-table",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Dict",
          "path": "dict",
          "hidden": false,
          "component": "system/dict/index",
          "meta": {
            "title": "字典管理",
            "icon": "dict",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Config",
          "path": "config",
          "hidden": false,
          "component": "system/config/index",
          "meta": {
            "title": "参数设置",
            "icon": "edit",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Notice",
          "path": "notice",
          "hidden": true,
          "component": "system/notice/index",
          "meta": {
            "title": "通知公告",
            "icon": "message",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Log",
          "path": "log",
          "hidden": false,
          "redirect": "noRedirect",
          "component": "ParentView",
          "alwaysShow": true,
          "meta": {
            "title": "日志管理",
            "icon": "log",
            "noCache": false,
            "link": null
          },
          "children": [
            {
              "name": "Operlog",
              "path": "operlog",
              "hidden": false,
              "component": "system/operlog/index",
              "meta": {
                "title": "操作日志",
                "icon": "form",
                "noCache": false,
                "link": null
              }
            },
            {
              "name": "Logininfor",
              "path": "logininfor",
              "hidden": false,
              "component": "system/logininfor/index",
              "meta": {
                "title": "登录日志",
                "icon": "logininfor",
                "noCache": false,
                "link": null
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Monitor",
      "path": "/monitor",
      "hidden": true,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "系统监控",
        "icon": "monitor",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "Online",
          "path": "online",
          "hidden": false,
          "component": "monitor/online/index",
          "meta": {
            "title": "在线用户",
            "icon": "online",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Job",
          "path": "job",
          "hidden": false,
          "component": "monitor/job/index",
          "meta": {
            "title": "定时任务",
            "icon": "job",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Http://localhost:8718",
          "path": "http://localhost:8718",
          "hidden": false,
          "component": "Layout",
          "meta": {
            "title": "Sentinel控制台",
            "icon": "sentinel",
            "noCache": false,
            "link": "http://localhost:8718"
          }
        },
        {
          "name": "Http://localhost:8848/nacos",
          "path": "http://localhost:8848/nacos",
          "hidden": false,
          "component": "Layout",
          "meta": {
            "title": "Nacos控制台",
            "icon": "nacos",
            "noCache": false,
            "link": "http://localhost:8848/nacos"
          }
        },
        {
          "name": "Http://localhost:9100/login",
          "path": "http://localhost:9100/login",
          "hidden": false,
          "component": "Layout",
          "meta": {
            "title": "Admin控制台",
            "icon": "server",
            "noCache": false,
            "link": "http://localhost:9100/login"
          }
        }
      ]
    },
    {
      "name": "Tool",
      "path": "/tool",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "系统工具",
        "icon": "tool",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "Build",
          "path": "build",
          "hidden": false,
          "component": "tool/build/index",
          "meta": {
            "title": "表单构建",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Gen",
          "path": "gen",
          "hidden": false,
          "component": "tool/gen/index",
          "meta": {
            "title": "代码生成",
            "icon": "code",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Http://localhost:8080/swagger-ui/index.html",
          "path": "http://localhost:8080/swagger-ui/index.html",
          "hidden": false,
          "component": "Layout",
          "meta": {
            "title": "系统接口",
            "icon": "swagger",
            "noCache": false,
            "link": "http://localhost:8080/swagger-ui/index.html"
          }
        }
      ]
    },
    {
      "name": "Http://www.china-ocean.com.cn/",
      "path": "http://www.china-ocean.com.cn/",
      "hidden": true,
      "component": "Layout",
      "meta": {
        "title": "官网",
        "icon": "guide",
        "noCache": false,
        "link": "http://www.china-ocean.com.cn/"
      }
    }
  ]
}
```
