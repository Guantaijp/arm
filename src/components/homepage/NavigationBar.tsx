import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button
} from "@nextui-org/react";
import { NavItem } from '../types.ts';

const navigationItems: NavItem[] = [
    { label: "OUR STORY", href: "#" },
    { label: "DEVELOPMENTS", href: "#" },
    { label: "BUYING ASSISTANCE", href: "#" },
];

const NavigationBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            shouldHideOnScroll
            isBordered={false}
            className="bg-white/70 backdrop-blur-md"
            maxWidth="xl"
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </NavbarContent>

            <NavbarBrand>
                <p className="font-bold text-inherit">ARM</p>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                {navigationItems.map((item) => (
                    <NavbarItem key={item.label}>
                        <a
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            {item.label}
                        </a>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        as="a"
                        color="default"
                        href="#"
                        variant="flat"
                        className="text-sm"
                    >
                        LET'S TALK
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {navigationItems.map((item) => (
                    <NavbarMenuItem key={item.label}>
                        <a
                            href={item.href}
                            className="w-full text-gray-600 hover:text-gray-800"
                        >
                            {item.label}
                        </a>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default NavigationBar;