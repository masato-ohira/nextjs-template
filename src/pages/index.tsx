import type { NextPage } from 'next'
import Head from 'next/head'
import { times } from 'lodash'

// store
import { useSelector } from 'react-redux'
import { selectors } from '@/store/site'

// components
import {
  Container,
  Button,
  Text,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'

const Home: NextPage = () => {
  const { name: siteName } = useSelector(selectors.siteData)
  const samples = times(8, (n) => {
    const num: number = n + 1
    return {
      id: num,
      title: `title ${num}`,
    }
  })

  return (
    <>
      <Head>
        <title>{siteName}</title>
      </Head>
      <Container maxW={'container.xl'}>
        <Text fontSize={'4xl'} fontWeight={'bold'}>
          {siteName}
        </Text>
        <Table>
          <Tbody>
            {samples.map((i: any, key: number) => {
              return (
                <Tr key={key}>
                  <Th width={20}>{i.id}</Th>
                  <Td width={40}>{i.title}</Td>
                  <Td>
                    <Button colorScheme={'link'}>詳細はこちら</Button>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </Container>
    </>
  )
}

export default Home
