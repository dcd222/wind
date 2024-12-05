// export default {
//   path: "/YinFan",
//   redirect: "/YinFan/YinFan-Assessment",
//   meta: {
//     icon: "mdi:fan-speed-1",
//     // showLink: false,
//     title: "风机A",
//     rank: 4
//   },
//   children: [
//     {
//       path: "/YinFan/YinFan-Assessment",
//       name: "YinFan-Assessment",
//       component: () => import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
//       meta: {
//         title: "设备运行状态评估"
//       }
//     },
//     {
//       path: "/YinFan/YinFan-FaultDiagnosis",
//       name: "YinFan-FaultDiagnosis",
//       component: () =>
//         import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
//       meta: {
//         title: "故障诊断"
//       }
//     },
//     {
//       path: "/YinFan/YinFan-DeteriorationTrend",
//       name: "YinFan-DeteriorationTrend",
//       component: () =>
//         import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
//       meta: {
//         title: "劣化趋势"
//       }
//     }
//   ]
// } satisfies RouteConfigsTable;

export default {
  path: "/Unit4",
  redirect: "/Unit4/PrimaryFan-Assessment",
  meta: {
    icon: "mdi:fan-speed-1",
    title: "四号机组运行状态",
    rank: 4
  },
  children: [
    {
      path: "/Unit4/menu1",
      meta: {
        title: "一次风机运行状态"
        // rank: 1
      },
      name: "Menu1",
      children: [
        {
          path: "/Unit4/menu1/menu1-1",
          meta: {
            title: "A侧运行状态"
            // rank: 1
          },
          name: "Menu1-1",
          children: [
            {
              path: "/Unit4/menu1/menu1-1/menu1-1-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu1-1-1",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/menu1/menu1-1/menu1-1-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu1-1-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/menu1/menu1-1/menu1-1-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu1-1-3",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/Unit4/menu1/menu1-1",
          meta: {
            title: "B侧运行状态"
            // rank: 2
          },
          name: "Menu1-1",
          children: [
            {
              path: "/Unit4/menu1/menu1-1/menu1-2-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu1-2-1",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/menu1/menu1-1/menu1-2-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu1-2-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/menu1/menu1-1/menu1-2-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu1-2-3",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        }
      ]
    },

    {
      path: "/Unit4/menu2",
      meta: {
        title: "送风机"
        // rank: 2
      },
      name: "Menu2",
      children: [
        {
          path: "/Unit4/menu2/menu2-1",
          meta: {
            title: "A侧运行状态"
            // rank: 1
          },
          name: "Menu2-1",
          children: [
            {
              path: "/Unit4/menu2/menu2-1/menu2-1-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu2-1-1",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/menu2/menu2-1/menu2-1-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu2-1-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/menu2/menu2-1/menu2-1-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu2-1-3",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/Unit4/menu2/menu2-2",
          meta: {
            title: "B侧运行状态"
            // rank: 2
          },
          name: "Menu2-2",
          children: [
            {
              path: "/Unit4/menu2/menu2-2/menu3-2-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu2-2-1",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/menu2/menu2-2/menu2-2-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu2-2-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/menu2/menu2-2/menu2-2-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu2-2-3",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        }
      ]
    },
    {
      path: "/Unit4/menu3",
      meta: {
        title: "引风机运行状态"
        // rank: 3
      },
      name: "Menu3",
      children: [
        {
          path: "/Unit4/menu3/menu3-1",
          meta: {
            title: "A侧运行状态"
            // rank: 1
          },
          name: "Menu3-1",
          children: [
            {
              path: "/Unit4/menu3/menu3-1/menu3-1-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu3-1-1",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/menu3/menu3-1/menu3-1-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu2-1-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/menu3/menu3-1/menu3-1-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu3-1-3",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/Unit4/menu3/menu2-2",
          meta: {
            title: "B侧运行状态"
            // rank: 2
          },
          name: "Menu3-2",
          children: [
            {
              path: "/Unit4/menu3/menu3-2/menu3-2-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu3-2-1",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/menu3/menu3-2/menu3-2-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu3-2-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/menu3/menu3-2/menu3-2-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu3-2-3",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        }
      ]
    },
    {
      path: "/Unit4/menu4",
      meta: {
        title: "循环泵运行状态"
        // rank: 4
      },
      name: "Menu4",
      children: [
        {
          path: "/Unit4/menu4/menu4-1",
          meta: {
            title: "A侧运行状态"
            // rank: 1
          },
          name: "Menu4-1",
          children: [
            {
              path: "/Unit4/menu4/menu4-1/menu4-1-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu4-1-1",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/menu4/menu4-1/menu4-1-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu4-1-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/menu4/menu4-1/menu4-1-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu4-1-3",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/Unit4/menu4/menu4-2",
          meta: {
            title: "B侧运行状态"
            // rank: 2
          },
          name: "Menu3-2",
          children: [
            {
              path: "/Unit4/menu4/menu4-2/menu4-2-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu4-2-1",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/menu4/menu4-2/menu4-2-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu4-2-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/menu4/menu4-2/menu4-2-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu4-2-3",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        },

        {
          path: "/Unit4/menu4/menu4-3",
          meta: {
            title: "C侧运行状态"
            // rank: 3
          },
          name: "Menu4-3",
          children: [
            {
              path: "/Unit4/menu4/menu4-3/menu4-3-1",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-Assessment.vue"),
              name: "Menu4-3-1",
              meta: {
                title: "状态评估"
              }
            },
            {
              path: "/Unit4/menu4/menu4-2/menu4-3-2",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-FaultDiagnosis.vue"),
              name: "Menu4-3-2",
              meta: {
                title: "故障诊断"
              }
            },
            {
              path: "/Unit4/menu4/menu4-3/menu4-3-3",
              component: () =>
                import("@/views/PrimaryFan/PrimaryFan-DeteriorationTrend.vue"),
              name: "Menu4-3-3",
              meta: {
                title: "劣化趋势"
              }
            }
          ]
        }
      ]
    }
  ]
} satisfies RouteConfigsTable;