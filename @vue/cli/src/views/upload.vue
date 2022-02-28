<template>
  <div class="example">
    <el-row style="margin:20px 0;padding:0 20px">
      <el-button @click="handleClick('word')">
        预览word
      </el-button>
      <el-button @click="handleClick('excel')">
        预览Excel
      </el-button>
      <el-button @click="handleClick('pdf')">
        预览pdf
      </el-button>
      <a style="margin-left:20px" :href="`https://view.officeapps.live.com/op/view.aspx?src=${fileUrl}`" target="_blank">微软在线预览ppt</a>
    </el-row>

    <el-row style="margin:20px 0;padding:0 20px">
      <a href="/files/test.docx" style="margin-right:20px">下载word</a>
      <a href="/files/test.xlsx" style="margin-right:20px">下载Excel</a>
      <a href="/files/test.pdf" style="margin-right:20px">下载pdf</a>
    </el-row>

    <el-dialog title="预览" :visible.sync="dialogTableVisible">
      <div v-if="currentType==='word'" v-html="textValue" style="max-height:500px;overflow-y:auto"></div>
      <iframe  v-if="currentType==='pdf'" :src="'/pdf/web/viewer.html?file='+pdfUrl" height="560" width="100%">
      </iframe>
      <div id="table" v-if="currentType==='excel'">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
              v-for="(value,key,index) in tableData[2]"
              :key="index"
              :prop="key"
              :label="key"
          ></el-table-column>
        </el-table>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import { getWord,getExcel } from './utils/docConvertUtils'
  import _ from 'lodash'
  export default {
    name:'Example',
    data() {
      return {
        tableData: [],
        pdfUrl:'',
        textValue:'',
        currentType:'',
        dialogTableVisible: false,
        fileUrl:'http%3a%2f%2fvideo.ch9.ms%2fbuild%2f2011%2fslides%2fTOOL-532T_Sutter.pptx'
      };
    },
    created() {

    },
    methods:{
      async handleClick(type){
        this.currentType = type
        switch(type) {
          case 'word':{
            this.textValue = await getWord({url:''})
            break;
          }
          case 'excel':{
            const res = await getExcel({url:''})
            this.tableData = _.cloneDeep(res)
            break;
          }
          case 'pdf':{
            this.pdfUrl = '/files/test.pdf'
            break;
          }
          default:
            break;
        }

        this.dialogTableVisible = !this.dialogTableVisible
      }
    }
  }
</script>
<style>

</style>