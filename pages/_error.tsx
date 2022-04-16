import NextErrorComponent from "next/error";
import { NextPageContext } from "next";

interface MyErrorPageProps {
  statusCode: number;
  hasGetInitialPropsRun: boolean;
  err: any;
}

const MyError = ({
  statusCode,
  hasGetInitialPropsRun,
  err,
}: MyErrorPageProps) => {
  return <NextErrorComponent statusCode={statusCode} />;
};

MyError.getInitialProps = async (context: NextPageContext) => {
  const errorInitialProps: any = await NextErrorComponent.getInitialProps(
    context
  );

  const { res, err, asPath } = context;
  errorInitialProps.hasGetInitialPropsRun = true;

  if (res?.statusCode === 404) {
    return errorInitialProps;
  }

  return errorInitialProps;
};

export default MyError;
