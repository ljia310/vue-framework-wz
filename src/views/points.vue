<template>
  <div class="animated fadeIn"  style="margin-top: -15px;">

    <Row>
      <Col :sm="4" :md="4" :lg="4">
      <Tree :data="tree_data"></Tree>
      </Col>
      
      <Col :sm="20" :md="20" :lg="20">
      <div style="margin-bottom:15px;">
       <Button type="primary">新增</Button>
       <Button type="primary">删除</Button>
       <div style="margin-top:-30px;margin-bottom:15px;" align="right">
       状态实时刷新
       <iSwitch>
        <span slot="open">开</span>
        <span slot="close">关</span>
      </iSwitch>
      </div>
      </div>
       <Table :columns="columns1" :data="tb_data"></Table>
       <div style="margin-top:5px;" align="right">
       <Page :total="this.page_info.total" :page-size="this.page_info.page_size" :current="this.page_info.page_index" show-total></Page>
       </div>
      </Col>
      
    </Row>
    <BackTop></BackTop>
  </div>
</template>

   
<script>

    export default {
        data () {
            return {
               columns1: [
                    {
                        title: '标签',
                        key: 'lable'
                    },
                    {
                        title: '名称',
                        key: 'name'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '状态',
                        key: 'state'
                    },
                    {
                        title: '类型',
                        key: 'v_type'
                    },
                    {
                        title: '数据',
                        key: 'value'
                    },
                    {
                        title: '时间戳',
                        key: 'times'
                    },
                     {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '历史曲线'),
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.write(params.index)
                                        }
                                    }
                                }, '写值')
                            ]);
                        }
                    }
                ],
                tb_data: [
                    {
                        lable:'温度',
                        name: '温度',
                        address: '107#1-1',
                        state:'值变化',
                        v_type:'FLOAT',
                        value:25.7,
                        times:'2017-09-15 10:12:21.123'
                    },
                    {
                        lable:'温度',
                        name: '温度',
                        address: '107#1-1',
                        state:'值变化',
                        v_type:'FLOAT',
                        value:25.7,
                        times:'2017-09-15 10:12:21.123'
                    },
                    {
                        lable:'温度',
                        name: '温度',
                        address: '107#1-1',
                        state:'值变化',
                        v_type:'FLOAT',
                        value:25.7,
                        times:'2017-09-15 10:12:21.123'
                    },
                    {
                        lable:'温度',
                        name: '温度',
                        address: '107#1-1',
                        state:'值变化',
                        v_type:'FLOAT',
                        value:25.7,
                        times:'2017-09-15 10:12:21.123'
                    },
                    {
                        lable:'温度',
                        name: '温度',
                        address: '107#1-1',
                        state:'值变化',
                        v_type:'FLOAT',
                        value:25.7,
                        times:'2017-09-15 10:12:21.123'
                    },
                    {
                        lable:'温度',
                        name: '温度',
                        address: '107#1-1',
                        state:'值变化',
                        v_type:'FLOAT',
                        value:25.7,
                        times:'2017-09-15 10:12:21.123'
                    }
                    
                ],
                page_info:
                {
                   page_size:50,
                   page_index:3,
                   total:123
                }
            }
        },
         methods: {
            show (index) {
                this.$Modal.info({
                    title: '历史信息',
                    content: `标签：${this.tb_data[index].lable}<br>名称${this.tb_data[index].name}<br>地址：${this.tb_data[index].address}`
                })
            },
            write (index) {
                this.$Modal.info({
                    title: '历史信息',
                    content: `标签：${this.tb_data[index].lable}<br>名称${this.tb_data[index].name}<br>地址：${this.tb_data[index].address}`
                })
            }
        },
      }
       
</script>

