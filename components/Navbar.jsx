import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer} from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout, FcKey} from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

const NavBar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
            <Link href="/" padding-left="2" >Realtor</Link>
        </Box>
        <Spacer/>
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href="/search" passHref>
                        <MenuItem icon={<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passHref>
                        <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-rent" passHref>
                        <MenuItem icon={<FcKey />}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
)

export default NavBar