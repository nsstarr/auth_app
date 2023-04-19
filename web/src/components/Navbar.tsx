interface NavbarProps {

}

function Navbar({}: NavbarProps) {
    return (
        <nav className="flex w-screen space-x-4 list-none">
            <li>DIY Depot</li>
            <li>About</li>
            <li>Products</li>
            <li>Reviews</li>
        </nav>
    );
}

export default Navbar;