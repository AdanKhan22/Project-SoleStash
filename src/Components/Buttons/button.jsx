import "./button.css";

export default function Button({ onClick, isDisabled, text }) {
  return (
    <div>
      <button
        className="btn-secondary-blc"
        onClick={onClick}
        disabled={isDisabled}
      >
        {text}
      </button>
    </div>
  );
}
