<template>
  <el-form ref="formRef" :model="submitForm" :rules="formRules">
    <el-form-item label="选项" prop="option">
      <el-select-v2 clearable v-model="submitForm.option" :options="options" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'

export default defineComponent({

  name: 'home',

  setup () {
    const formRef = ref()

    return {
      formRef
    }
  },

  data () {
    return {
      formRules: {
        option: [
          {
            required: true,
            message: '请选择',
            trigger: 'change'
          }
        ]
      },

      submitForm: {
        option: ''

      },
      options: [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' }
      ]

    }
  }
})
</script>
