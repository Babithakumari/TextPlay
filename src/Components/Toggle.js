/* Rounded switch */

export default function Toggle(prop) {
  return (
    <label class="switch">
      <input type="checkbox" onclick={prop.toggleMode} />
      <span class="slider round"></span>
    </label>
  );
}
