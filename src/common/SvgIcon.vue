<template>
  <img :src="require(`@/assets/svg/${name}.svg`)" alt="" />
</template>
<script>
export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    svgClass: {
      type: String,
      default: "image_svg"
    },
    width: {
      type: Number,
      default: undefined
    },
    height: {
      type: Number,
      default: undefined
    }
  },
  watch: {
    name() {
      // using setTimeout to make sure the svg was rendered first, then update the class name.
      setTimeout(this.updateSvgClass);
    },

  },
  mounted() {
  },
  methods: {
  }
};
</script>
