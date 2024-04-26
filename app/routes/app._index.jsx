import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  InlineStack,
  InlineGrid,
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";
import stellaLogo from "/images/stella-ai.png";
import { useTranslation } from 'react-i18next';

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  const response = await admin.graphql(`
    {
      shop {
        myshopifyDomain
      }
    }
  `);
  const responseJson = await response.json();
  const shopDomain = responseJson.data.shop.myshopifyDomain;

  return json({ shopDomain });
};

export default function Index() {
  const { shopDomain } = useLoaderData();
  const { t } = useTranslation();

  return (
    <Page>
      <ui-title-bar title="Dashboard">
      </ui-title-bar>
      <BlockStack gap="500">
        <Layout>
         
        </Layout>
      </BlockStack>
    </Page>
  );
}