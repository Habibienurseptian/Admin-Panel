function Button({ text, onClick, colorClass }) {
    return (
      <button onClick={onClick} className={`${colorClass} rounded px-4 py-2 text-white font-semibold mr-2`}>
        {text}
      </button>
    );
  }

export default Button