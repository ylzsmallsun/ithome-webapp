<template>
  <div class="tieItem">
    <div class="tieHeader">
      <img class="ownerImg" :src="topic.headerImg"/>
      <span class="tieOwner">{{topic.tieOwner}}</span>
      <span class="category">{{topic.category}}</span>
    </div>
    <div class="tieCont">
      <div class="tieTitle">
        <span>{{topic.tipName}}</span>
        <span>{{topic.title}}</span>
      </div>
      <div class="tieFooter">
        <span class="postTime">{{topic.postTime}}</span>
        <span class="lastCommentName">{{topic.lastCommentName}}</span>
        <span class="lastCommentTime">{{topic.lastCommentTime}}</span>
        <div class="tieFooterFrCount">
          <span>{{topic.commentCount}}评论</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    topic: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @graycolor: #99a2aa;
  @color2: #333;
  .tieItem {
    margin: 1.5rem 0;
    border-bottom: solid .03rem #eee;
    .tieHeader {
      margin: 1.5rem 0 1.5rem 0;
      .ownerImg, .tieOwner, .category {
        vertical-align: middle;
      }
      .ownerImg {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }
      .tieOwner {
        margin-left: .75rem;
        font-size: 1.2rem;
        letter-spacing: .025rem;
        color: @color2;
      }
      .category {
        color: @color2;
        padding: .2rem .69rem;
        background: #f4f5f6;
        border-radius: 3rem;
        float: right;
      }
    }
    .tieCont {
      .tieTitle {
        font-size: 1.4rem;
        color: @color2;
      }
      .tieFooter {
        margin: 1.5rem 0;
        .postTime, .lastCommentTime {
          color: @graycolor;
        }
        .tieFooterFrCount {
          float: right;
          color: @graycolor;
        }
      }
    }
  }
</style>
