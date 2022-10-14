import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductList } from "../components/ProductList";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="Vaneck APP" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <ProductList />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
