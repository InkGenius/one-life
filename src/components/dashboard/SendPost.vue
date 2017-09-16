<template lang="html">
    <div class="post" style="margin-bottom:10px">
        <div class="post-header">
            <div class="header-close" v-on:click="goBack">
                <svg class="close-icon" viewBox="0 0 46 72" style="display: inline-block; fill: currentcolor; position: relative; user-select: none; vertical-align: text-bottom;"><g><path d="M27.243 36l14.879-14.879a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23 31.758 8.122 16.879a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242L18.758 36 3.879 50.879A2.998 2.998 0 0 0 6.001 56a2.99 2.99 0 0 0 2.121-.879L23 40.242l14.879 14.879A2.991 2.991 0 0 0 40 56a2.998 2.998 0 0 0 2.121-5.121L27.243 36z"></path></g></svg>
            </div>
            <!-- <div class="post-send">
                <span class="send-text" @click="sendText">发送</span>
            </div> -->
            <el-button size="mini" type="danger" @click="sendText">发送</el-button>
        </div>
        <div class="post-user">
            <div class="user-avatar">
                <img  class="header-avatar" v-if="userInfo" :src="userInfo.avatar_large">
                <span class="header-name">{{userInfo.name}}</span>
            </div>
        </div>
        <div class="post-status">
           <div contenteditable="true" ref="sendText" placeholder="有什么新鲜事？" class="status-text"></div>
        </div>
        <div class="status-image">
            <div class="image-select">
                <a href="javascript:" class="icon" style="opacity:0" ><input type="file" @change="imageChange" ref="inputer" accept="image/*" ></input></a>
            </div>
            <div class="image-img">
                <img v-if="dataUrl" class="img" :src="dataUrl">
                <div v-if="dataUrl" v-on:click="closeImage" class="image-close">
                    <svg class="close-icon" viewBox="0 0 46 72" style="display: inline-block; fill: currentcolor; position: relative; user-select: none; vertical-align: text-bottom;"><g><path d="M27.243 36l14.879-14.879a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23 31.758 8.122 16.879a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242L18.758 36 3.879 50.879A2.998 2.998 0 0 0 6.001 56a2.99 2.99 0 0 0 2.121-.879L23 40.242l14.879 14.879A2.991 2.991 0 0 0 40 56a2.998 2.998 0 0 0 2.121-5.121L27.243 36z"></path></g></svg>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
// import { mapGetters } from 'vuex'
// import * as api from '../api/impl/send_post'
import axios from 'axios'
export default {
  name: 'component_name',
  data () {
    return {
      dataText: '',
      dataUrl: '',
      pic: null,
      file: null,
      fileName: '',
      userInfo: {name: 'daisong', avatar_large: 'http://tva1.sinaimg.cn/crop.20.22.264.264.180/006be6IBjw8ez79xvdn9mj30b408cwex.jpg'}
    }
  },
  computed: {
    // ...mapGetters({
    //   userInfo: 'userInfo'
    // })
  },
  activated () {
    var div = this.$refs.sendText
    div.innerHTML = ''
  },
  methods: {
    sendText () {
      var self = this
      var div = this.$refs.sendText
      if (self.dataUrl) {
        self.sendImg()
        return
      }
      if (!div.innerHTML) return
      self.dataText = div.innerHTML
    //   api.postSendText(
    //     self.dataText,
    //     response => {
    //       if (response.status === 200) {
    //         self.goBack()
    //       }
    //     },
    //     err => {
    //       alert('发送失败，请稍后尝试' + err)
    //     })
    },
    sendImg () {
      var self = this
      var div = this.$refs.sendText
      if (!self.dataUrl) return
      self.dataText = div.innerHTML
      // var reader = new FileReader()
      // reader.readAsBinaryString(self.file)
      // reader.onloadend = function () {
      // }
      self.pic = this.result
      let inputDOM = this.$refs.inputer
      // 通过DOM取文件数据
      this.file = inputDOM.files[0]
      let form = new FormData()
      form.append('recordpic', this.file)
      form.append('context', self.dataText)
      form.append('userid', 'simulation')
      form.append('experienceid', 'simulation')
      form.append('mood', 10)
      var config = {
        method: 'post',
        url: '/record/add',
        baseURL: 'http://localhost:3001',
        data: form,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      axios(config).then(function (response) {
        if (response.status === 200) {
          self.goBack()
        }
      }).catch(function (error) {
        alert('发送失败，请稍后尝试' + error)
      })
    },
    closeImage () {
      this.imgPreview(null)
    },
    imgPreview (file) {
      let self = this
      // 看支持不支持FileReader
      if (!file || !window.FileReader) {
        self.dataUrl = ''
        return
      }
      var reader = new FileReader()
      // 将图片将转成 base64 格式
      reader.readAsDataURL(self.file)
      // 读取成功后的回调
      reader.onloadend = function () {
        self.dataUrl = this.result
      }
    },
    imageChange (e) {
      let inputDOM = this.$refs.inputer
      // 通过DOM取文件数据
      this.file = inputDOM.files[0]
      this.errText = ''
    //   let size = Math.floor(this.file.size / 1024)
      // 触发这个组件对象的input事件
      this.$emit('input', this.file)
      // 这里就可以获取到文件的名字了
      this.fileName = this.file.name
      this.imgPreview(this.file)
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
 
<style lang="css">
.post {
    background-color: #ffffff;
    width: 100%;
    height: 100%;
}

.post-header {
    width: 100%;
    height: 4rem;
    background-color: #ffffff;
    display: flex;
    flex-flow: rom;
}

.post-header .header-close {
    color: #007AFF;
    width: 2rem;
    height: 2rem;
    margin: 1rem;
    flex: 1;
    position: relative;
}

.post-header .close-icon {
    width: 2rem;
    height: 2rem;
}

.post-header .post-send {
    width: 4rem;
    height: 100%;
    margin-right: 1rem;
    opacity: .7;
}

.post-header .post-send .send-text {
    color: #007AFF;
    margin: 0;
    padding: 0;
    line-height: 4rem;
    margin-left: 1rem;
    font-weight: 900;
    font-size: 1.4rem;
}

.post-user {
    width: 100%;
    height: 5rem;
    background-color: #ffffff;
}

.post-user .user-avatar {
    padding: 1rem;
    display: flex;
    flex-flow: row;
}

.post-user .user-avatar .header-avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
}

.post-user .user-avatar .header-name {
    flex: 1;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 3rem;
    margin-left: 1rem;
}

.post-status {
    width: 100%;
    min-height: 5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    padding-top: .5rem;
    background-color: #ffffff;
    border-bottom: 1px solid rgba(0, 0, 0, .05);
}

.post-status .status-text {
    width: 100%;
    resize: none;
    font-size: 1.5rem;
    outline: none;
}

.status-text:empty:before {
    content: attr(placeholder);
    color: #999999;
}

.status-text:focus:before {
    content: none;
}

.post .status-image {
    width: 100%;
    padding: 1rem;
}

.status-image .image-select {
    width: 2.3rem;
    height: 2.3rem;
    background-image: url(../../assets/image.png);
    background-size: 100%;
    background-repeat: no-repeat;
}

.status-image .image-img {
    width: 15rem;
    height: 15rem;
    margin-top: 1rem;
    position: relative;
}

.status-image .image-img .image-close {
    color: #007AFF;
    width: 1.2rem;
    height: 1.2rem;
    margin: .5rem;
    z-index: 200;
    position: absolute;
    top: 0;
    right: 0;
}

.status-image .image-img .img {
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 0;
}
</style>