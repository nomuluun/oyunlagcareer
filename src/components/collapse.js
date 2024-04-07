import { Collapse } from "flowbite";
const $targetEl = document.getElementById("targetEl");
const $triggerEl = document.getElementById("triggerEl");
const options = {
  onCollapse: () => {
    console.log("element has been collapsed");
  },
  onExpand: () => {
    console.log("element has been expanded");
  },
  onToggle: () => {
    console.log("element has been toggled");
  },
};
const instanceOptions = {
  id: "targetEl",
  override: true,
};
const collapse = new Collapse($targetEl, $triggerEl, options, instanceOptions);
