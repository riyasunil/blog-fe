<script>
import { defineComponent, h } from 'vue';

export default defineComponent({
  props: {
    tag: {
      type: String, // The tag to render, e.g., 'div', 'span', etc.
      required: true,
    },
    html: {
      type: String, // The HTML content to inject.
      required: true,
    },
  },
  setup(props) {
    // Dynamically create a VNode with the specified tag and HTML content.
    return () => h(props.tag, { innerHTML: props.html });
  },
});
</script>
