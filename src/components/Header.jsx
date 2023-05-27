import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        position={'fixed'}
        zIndex={'overlay'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        h={'10'}
        width={'10'}
        borderRadius={'full'}
        p={'0'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}  placement='left'>
        <DrawerOverlay />
        <DrawerContent>
         <DrawerCloseButton/>
         <DrawerHeader fontWeight={'bold'} textColor={'purple.800'} textAlign={'start'}>
          SOFTCODER 
          <DrawerBody>
          <VStack>
          <Button onClick={onClose}colorScheme='purple' variant={'ghost'}>
            <Link to={'/'}>Home</Link>
          </Button>
          <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
            <Link to={'/videos'}>Videos</Link>
          </Button>
          <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
            <Link to={'/videos?category=free'}>FreeVideos</Link>
          </Button>
          <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
            <Link to={'/upload'}>Upload</Link>
          </Button>
          </VStack>

          <HStack position={'absolute'} bottom={'5'} left={'4'} alignItems={'center'}
          w={'full'} justifyContent={'space-evenly'} >
            <Button onClick={onClose} colorScheme='purple' >
              <Link to={'/login'}>Login</Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant={'outline'} >
              <Link to={'/signup'}>SignUp</Link>
            </Button>
          </HStack>
          </DrawerBody>
         </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
