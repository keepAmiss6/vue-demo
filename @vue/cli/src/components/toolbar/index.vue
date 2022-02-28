<template>
  <div class="tab-bar-index">
    <div>content</div>
    <div class="tab-bar">
      <TabbarItem class="item" link="/home">
        <img src="../../assets/tabbar/home.svg" slot="item-img">
        <img src="../../assets/tabbar/home_active.svg" slot="item-img-active">
        <div slot="item-text">首页</div>
      </TabbarItem>
      <TabbarItem class="item" link="/catagory">
        <img src="../../assets/tabbar/category.svg" slot="item-img">
        <img src="../../assets/tabbar/category_active.svg" slot="item-img-active">
        <div slot="item-text">分类</div>
      </TabbarItem>
      <TabbarItem class="item" link="/shopcart">
        <img src="../../assets/tabbar/shopcart.svg" slot="item-img">
        <img src="../../assets/tabbar/shopcart_active.svg" slot="item-img-active">
        <div slot="item-text">购物车</div>
      </TabbarItem>
      <TabbarItem class="item" link="/profile">
        <img src="../../assets/tabbar/profile.svg" slot="item-img">
        <img src="../../assets/tabbar/profile_active.svg" slot="item-img-active">
        <div slot="item-text">我的</div>
      </TabbarItem>
    </div>
  </div>
</template>

<script>
  import TabbarItem from "./tabbar";
  export default {
    name: "toolBarIndex",
    components:{
      TabbarItem
    }
  }
</script>

<style>
  .tab-bar-index {
    border: 1px solid darkseagreen;
    width: 300px;
    height: 500px;
    border-radius: 5px;
    display: flex;
    position: relative;

  }
  .tab-bar{
    height: 49px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background: darkgrey;
  }

  .item{
    flex: 1;
    font-size: 12px;
  }

  .item img{
    width: 24px;
    height: 24px;
  }
</style>