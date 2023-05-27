import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';

const Videos = () => {
  const Aryanarr = [
    'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
  ];
  const [aryan, setaryan] = useState(Aryanarr[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack width={'full'}>
        <video
          src={aryan}
          controls
          controlsList="nodownload"
          width={'100%'}
        ></video>
        <VStack overflow={'auto'} alignItems={'flex-start'} p={'4'}>
          <Heading color={'blackAlpha.900'}>
            Its SofteCoder FIrst Intro{' '}
          </Heading>
          <Text color={'blackAlpha.800'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            voluptatibus cum, doloremque tempore facere sapiente dolore beatae
            ipsa eum quam ratione illo perferendis dolorem dolor debitis non,
            accusamus numquam cupiditate, iusto voluptatem vero quas. Quidem
            autem rerum obcaecati quisquam. Illum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro, ea necessitatibus. Quia
            blanditiis magni facilis, veritatis repellendus.
          </Text>
        </VStack>
      </VStack>
      <VStack
        width={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        overflowY={'auto'}
        spacing={'8'}
      >
        {Aryanarr.map((item, name) => (
          <Button
            colorScheme="purple"
            variant={'ghost'}
            onClick={() => setaryan(item)}
          >
            Video {name +1}
          </Button>
        ))};
      </VStack>
    </Stack>
  );
};

export default Videos;

//in the line 11 i have do width 30% and its working but for good responivness we should do full for mobile and 30 for big screen
//for insted of 30% we can also use breakpoint like xl
