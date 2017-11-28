<template>
  <div class="home-wrap">
      <p>{{msg}}</p>
      <div>
          <button @click="test">test</button>
      </div>
      <div>
          <div><input type="text" placeholder="name" v-check="{type: 'number', val: curName}" v-model="curName"></div>
          <div><input type="text" placeholder="price" v-check="{type: 'teshu', val: curPrice}" v-model="curPrice"></div>
          <div><button @click="addData">submit</button></div>
          <div>
              <ul>
                  <li v-for="(item, $index) in list">name: {{item.name}}{{++$index}};price: ${{item.price}}</li>
              </ul>
          </div>
      </div>
      <div>
          <ul>
                <li v-for="(item, $index) in tab" @click="change($index)" :class="{act: $index == changBoxNum}">{{item.name}}</li>
              <!-- <li @click="change(1)" :class="{act:changeBoxNum == 1}">植物</li>
              <li @click="change(2)" :class="{act:changeBoxNum == 2}">动物</li> -->
          </ul>
          <ul v-if="changeBoxNum == 0">
              <li v-for="(item, $index) in plants">{{item.name}}{{++$index}}：${{item.price}}</li>
          </ul>
          <ul v-if="changeBoxNum == 1">
              <li v-for="(item, $index) in animals">{{item.name}}{{++$index}}：${{item.price}}</li>
          </ul>
      </div>
  </div>
</template>
<style>
    .act{
        background: pink;
        color: #fff;
    }
</style>

<script>
    export default {
        data () {
            return {
                changeBoxNum: 1,
                msg: 'this is home page!',
                name: 'say Hi',
                curName: null,
                curPrice: null,
                isShow: true,
                oldVal: null,
                tab: [
                    {
                        name: 'plants'
                    },
                    {
                        name: 'animals'
                    }
                ],
                animals: [
                    {
                        name: 'dog',
                        price: '122'
                    },
                    {
                        name: 'cat',
                        price: '3'
                    },
                    {
                        name: 'pig',
                        price: '22'
                    },
                ],
                plants: [
                    {
                        name: 'trees',
                        price: '78'
                    },
                    {
                        name: 'flowers',
                        price: '12'
                    },
                    {
                        name: 'grass',
                        price: '5454'
                    }
                ],
                list: [
                    {
                        name: 'dog',
                        price: '11'
                    },
                    {
                        name: 'pig',
                        price: '21'
                    }
                ]
            }
        },
        beforeCreate () {
            console.log(this.$el+'+++beforeCreate')
        },
        created () {
            this.msg = 'good-bye!'
            console.log(this.$el+'+++created')
        },
        beforeMount () {
            console.log(this.$el+'+++beforeMount')
        },
        mounted () {
            console.log(this.$el+'+++mounted')
        },
        beforeUpdate () {
            console.log(this.$el+'+++beforeUpdate')
        },
        updated () {
            console.log(this.$el+'+++updated')
        },
        methods: {
            test: function (ev) {
                console.log(this.name)
                if (ev) {
                    console.log(ev.target.tagName)
                } 
            },
            change: function (num) {
                this.changeBoxNum = num
                console.log(this.changeBoxNum)
                console.log(num)
            },  
            addData: function () {
                this.list.push({name: this.curName, price: this.curPrice})
            },
            update: function (el, binding) {
                console.log(binding)
                let checkStatus = true
                if(binding.oldVal.val != binding.value.val) {
                    if (binding.value.type == 'number') {
                        if (!/^\d*$/g.test(binding.value.val)) {
                            checkStatus = false
                        }
                    } else if (binding.value.type == 'teshu') {
                        if (!/^\w*$/g.test(binding.value.val)) {
                            checkStatus = false
                        }
                    }
                    if (checkStatus) {
                        el.style.border = '1px solid #eee'
                    } else {
                        el.style.border = '1px solid #f40'
                    }
                }
            }
        }
    }
</script>
