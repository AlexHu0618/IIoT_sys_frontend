<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-middle">
          <dv-decoration-7 style="width:100%;height:30px;">智能机电运维管理平台</dv-decoration-7></div>
        <div class="mh-right">
          <dv-border-box-2
            style="width: 60px; height: 50px; line-height: 50px; text-align:center;margin:5px 10px;"
          >
            <a href="/">Home</a>
          </dv-border-box-2>
        </div>
        <div>
          <Datetime></Datetime>
        </div>
      </div>

      <!-- <dv-border-box-1 class="main-container">
        <div class="mc-top">
          <Top-Left-Cmp />
          <MapChart />
        </div>
        <div class="mc-bottom">
          <dv-decoration-4></dv-decoration-4>
        </div>
      </dv-border-box-1> -->

      <dv-border-box-1 class="main-container">
        <div class="mc-top">
          <Top-Left-Cmp />
          <MapChart />
          <!-- <Top-Middle-Cmp /> -->
          <Top-right-Cmp />
        </div>
        <div class="mc-bottom">
          <dv-border-box-10 class="bottom-left-container">
            <dv-decoration-4 class="mcb-decoration-1" style="width:5px;height:45%;" />
            <dv-decoration-4 class="mcb-decoration-2" style="width:5px;height:45%;" />
            <Bottom-Left-Chart-1 />
            <Bottom-Left-Chart-2 />
          </dv-border-box-10>

          <div class="bottom-right-container">
            <Bottom-Right-Table-1 />
            <Bottom-Right-Table-2 />
            <Bottom-Right-Table-3 />
            <Bottom-Right-Table-4 />
          </div>
        </div>
      </dv-border-box-1>

    </dv-full-screen-container>
  </div>
</template>

<script>
import store from '@/store'

import TopLeftCmp from './TopLeftCmp'
// import TopMiddleCmp from './TopMiddleCmp'
import TopRightCmp from './TopRightCmp'

import BottomLeftChart1 from './BottomLeftChart1'
import BottomLeftChart2 from './BottomLeftChart2'

import BottomRightTable1 from './BottomRightTable1'
import BottomRightTable2 from './BottomRightTable2'
import BottomRightTable3 from './BottomRightTable3'
import BottomRightTable4 from './BottomRightTable4'
import Datetime from './Datetime.vue'
import MapChart from './MapChart.vue'

export default {
  name: 'DataView',
  components: {
    TopLeftCmp,
    // TopMiddleCmp,
    TopRightCmp,
    BottomLeftChart1,
    BottomLeftChart2,
    BottomRightTable1,
    BottomRightTable2,
    BottomRightTable3,
    BottomRightTable4,
    Datetime,
    MapChart
  },
  data() {
    return {}
  },

  mounted: function() {
    store.dispatch('app/closeSideBar', { withoutAnimation: true })
  }
}
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('./img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .mh-left {
      font-size: 20px;
      color: rgb(1,134,187);

      a:visited {
        color: rgb(1,134,187);
      }
    }

    .mh-middle {
      font-size: 30px;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }

    .mh-left, .mh-right {
      width: 450px;
    }
  }

  .main-container {
    height: calc(~"100% - 80px");
    margin-left: 0;

    .mc-top, .mc-bottom {
      box-sizing: border-box;
      padding: 10px;
      display: flex;
    }

    .mc-top {
      height: 40%;
    }

    .mc-bottom {
      height: 60%;
    }

    .top-left-cmp, .bottom-left-container {
      width: 32%;
    }

    .top-middle-cmp, .top-right-cmp {
      width: 34%;
    }

    .bottom-left-container {
      position: relative;

      .border-box-content {
        display: flex;
      }

      .mcb-decoration-1, .mcb-decoration-2 {
        position: absolute;
        left: 50%;
        margin-left: -2px;
      }

      .mcb-decoration-1 {
        top: 5%;
        transform: rotate(180deg);
      }

      .mcb-decoration-2 {
        top: 50%;
      }

      .bottom-left-chart-1, .bottom-left-chart-2 {
        width: 50%;
        height: 100%;
      }
    }

    .bottom-right-container {
      width: 68%;
      padding-left: 30px;
      box-sizing: border-box;
      display: flex;
    }
  }
}
</style>

<!-- <template>
  <div class="dashboard-container" style="height: 100%;">
    <dv-border-box-1>dv-border-box-1</dv-border-box-1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style> -->

<!-- <template>
  <div>
    <iframe
      id="mobsf"
      allowfullscreen
      src="http://39.108.137.187:8000/"
      scrolling="no"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    /**
    * iframe-宽高自适应显示
    */
    function changeMobsfIframe() {
      const mobsf = document.getElementById('mobsf')
      const deviceWidth = document.body.clientWidth
      const deviceHeight = document.body.clientHeight
      mobsf.style.width = Number(deviceWidth) + 'px' // 数字是页面布局宽度差值
      mobsf.style.height = Number(deviceHeight) + 'px' // 数字是页面布局高度差
    }

    changeMobsfIframe()

    window.onresize = function() {
      changeMobsfIframe()
    }
  }
}
</script> -->
