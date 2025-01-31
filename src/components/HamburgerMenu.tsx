interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const HamburgerMenu = ({ isOpen, toggleMenu }: HamburgerMenuProps) => {
  return (
    <>
      <button
        onClick={toggleMenu}
        className={`sm:hidden text-2xl transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
      >
        {isOpen ? 'X' : '☰'}
      </button>
    </>
  );
};