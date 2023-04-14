export default defineStore({
  id: `menu`,
  state: () => {
    return {
      menuList: [
        { name: `表格`, icon: `#icon-biaoge`, path: `` },
        {
          name: `图表`,
          icon: `#icon-bar_chart_select`,
          path: ``,
        },
        { name: `3`, icon: ``, path: `` },
        { name: `4`, icon: ``, path: `` },
        { name: `5`, icon: ``, path: `` },
        { name: `6`, icon: ``, path: `` },
        { name: `7`, icon: ``, path: `` },
        { name: `8`, icon: ``, path: `` },
        { name: `9`, icon: ``, path: `` },
        { name: `10`, icon: ``, path: `` },
      ],
    }
  },
})
