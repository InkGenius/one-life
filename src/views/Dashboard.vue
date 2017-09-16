<template lang="html">
    <div class="home" id="home">
        <send-post></send-post>
        <div class="list"  v-for="x in list">
            <pcontent :x="x"></pcontent>
        </div>
        <div class="refresh-footer" v-if="option.refresh">
            <spinner :size="'45px'" :color="'#007AFF'"></spinner>
        </div>
    </div>
</template>               
 
<script>
// import { mapActions, mapGetters } from 'vuex'
import pcontent from '../components/dashboard/Content'
import sendPost from '../components/dashboard/SendPost'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      list: [],
      statuses: 'home_timeline',
      option: 'home_timeline_option',
      showImage: 'image_zoom_show'
    }
  },
  components: {
    pcontent,
    sendPost
  },
  computed: {
    // ...mapGetters({
    //   statuses: 'home_timeline',
    //   option: 'home_timeline_option',
    //   showImage: 'image_zoom_show'
    // })
  },
  watch: {
    // option: {
    //   handler: function (val, oldVal) {
    //     if (val && val.page === 1) {
    //       this.list = []
    //     }
    //   },
    //   deep: true
    // },
    // statuses: function (val, oldVal) {
    //   if (val) {
    //     if (this.option.page === 1) {
    //       this.list = val
    //     } else {
    //       this.list = [...this.list, ...val]
    //     }
    //   }
    // }
  },
  created () {
    this.homeTimeline(1)
  },
  mounted () {
    let url = 'http://localhost:3001/record/list'
    axios.get(url).then((res) => {
      console.log(JSON.stringify(res.data))
      this.list = res.data
    })
  },
  activated () {
    window.addEventListener('scroll', this.scrollBar)
  },
  deactivated () {
    window.removeEventListener('scroll', this.scrollBar)
  },
  methods: {
    // ...mapActions([
    //   'getHomeTimeline'
    // ]),
    homeTimeline (page) {
      // this.getHomeTimeline(page)
    },
    loadMore () {
      let vue = this
      vue.option.refresh = true
      var page = vue.option.page + 1
      vue.homeTimeline(page)
    },
    scrollBar () {
      // var vue = this
      var a = document.documentElement.scrollTop === 0 ? document.body.clientHeight : document.documentElement.clientHeight
      var b = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop
      var c = document.documentElement.scrollTop === 0 ? document.body.scrollHeight : document.documentElement.scrollHeight
      if (a + b === c && !this.showImage) {
        this.loadMore()
      }
    }
  }

}
</script>
 
<style lang="css">
.home {
    width:50%;
    margin:0 auto 0 auto;
}

.list {
    flex: 1;
    background-color: #fff;
    border-radius: 2px;
    padding: 1rem;
    margin-bottom: .8rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
}

.refresh-footer {
    margin-bottom: .8rem;
    margin-top: .8rem;
    text-align: center;
}
</style>
