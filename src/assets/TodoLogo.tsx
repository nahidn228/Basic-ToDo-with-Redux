const TodoLogo = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Purple background circle */}
    <circle cx="100" cy="100" r="90" fill="#764ABC" />

    {/* White checkmark */}
    <path
      d="M70 100l15 15 40-40"
      stroke="white"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Subtle swirl to hint Redux flow */}
    <path
      d="M130 140c15-10 15-35 0-45M90 145c-25 5-40-25-25-45M85 60c25-15 50 5 45 25"
      stroke="#F4E06D"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export default TodoLogo;
