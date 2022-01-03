<template>
  <div>
    <h2>案例二：图书列表</h2>
    <h3 v-if="books.length===0">购物车已清空</h3>
    <table v-else>
      <thead>
      <th></th>
      <th>书籍名称</th>
      <th>出版日期</th>
      <th>价格</th>
      <th>购买数量</th>
      <th>操作</th>
      </thead>
      <tbody>
      <tr v-for="(item,index) in books" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}}</td>
        <td>{{item.date}}</td>
        <!--        让原有数据更加丰富：添加显示两个小数位-->
        <!--        方案一：表达式直接写-->
        <!--        <td>¥ {{item.price.toFixed(2)}}</td>-->
        <!--        方案二：抽取成方法供多处调用-->
        <!--        <td>¥ {{getPrice(item.price)}}</td>-->
        <!--        方案三：使用过滤器 使用｜调用-->
        <td>¥ {{item.price | showPrice}}</td>
        <td>
          <!--  通过disable属性来控制按钮是否可以点击，当它为1个的时候不能再减少-->
          <button @click="sub(index)" v-bind:disabled="item.count===1">-</button>
          {{item.count}}
          <button @click="add(index)">+</button>
        </td>
        <td>
          <button @click="removeBook(index)">移除</button>
        </td>
      </tr>
      </tbody>
    </table>
    <h2 :style="{float:'left'}">总价:{{totalPrice | showPrice}}元</h2>
  </div>
</template>

<script>
  export default {
    name: "BookTable",
    data() {
      return {
        books: [{
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
        },
          {
            id: 2,
            name: '《UNIX编程艺术》',
            date: '2006-2',
            price: 59.00,
            count: 1
          },
          {
            id: 3,
            name: '《编程珠玑》',
            date: '2008-10',
            price: 39.00,
            count: 1
          },
          {
            id: 4,
            name: '《代码大全》',
            date: '2006-3',
            price: 128.00,
            count: 1
          },]
      }
    },
    computed: {
      totalPrice() {
        let totalPrice = 0;
        for (let item of this.books) {
          totalPrice += item.price * item.count;
        }

        return totalPrice;
      }
    },
    methods: {
      add(index) {
        this.books[index].count++;
      },
      sub(index) {
        this.books[index].count--;
      },
      removeBook(index) {
        this.books.splice(index, 1)
      },
      getPrice(price) {
        return price.toFixed(2)
      }
    },
    filters: {
      showPrice(price) {
        return price.toFixed(2)
      }
    }
  }
</script>

<style scoped>
  table {
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
  }

  th, td {
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
  }

  th {
    background-color: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
  }
</style>