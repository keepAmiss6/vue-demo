<template>
  <div>
    <h2>{{firstName}} {{lastName}}</h2>
    <h2>{{getFullName()}}</h2>
    <h2>{{getFullName()}}</h2>
    <h2>{{getFullName()}}</h2>
    <h2>{{fullName}}</h2>
    <h2>{{fullName}}</h2>
    <h2>{{fullName}}</h2>
    <h2>书的总价是{{totalPrice}}</h2>
  </div>
</template>

<script>
  export default {
    name: "computer",
    data() {
      return {
        firstName: 'Lebron',
        lastName: 'Smith',
        books: [
          {id: 1, name: 'javascript', price: 122},
          {id: 2, name: 'java', price: 112},
          {id: 3, name: 'python', price: 82}
        ]
      }
    },
    // 方法一，使用函数组装fullName
    methods: {
      getFullName() {
        console.log('函数我被调用了');
        return this.firstName + '' + this.lastName
      }
    },
    // 计算属性,一般起名尽量按照属性的命名，不加动词
    computed: {
      fullName() {
        console.log('计算属性我被调用了');
        return this.firstName + '' + this.lastName
      },
      totalPrice() {
        let price = this.books.reduce((pre, next) => pre + next.price, 0);
        return price
      }
    }
  }
</script>

<style scoped>

</style>