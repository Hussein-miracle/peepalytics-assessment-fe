"use client";
import axiosInstance from "@/services/axiosInstance";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { toast } from "sonner";

const handleTokenizedResponse = async (
  token: { token?: string },
  _buyer: unknown
) => {
  console.log({ token ,_buyer}, "TOKEN RESPNMOSE");
  try {
    const data = {
      sourceId: token?.token,
      amount: "1",
      currency: "USD",
    };
    const response = await axiosInstance.post("/process-payment", data);

    console.log({ response }, "payment process response");
  } catch (error: unknown) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    toast.error(error?.message || "An error occured");
  }
};

export default function Home() {
  return (
    <div className="p-24 h-screen bg-white">
      <PaymentForm
        applicationId={process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID as string}
        locationId="LID"
        cardTokenizeResponseReceived={handleTokenizedResponse}
        callbacks={{
          cardBrandChanged: (event: unknown) => console.info(event),
        }}
      >
        <CreditCard />
      </PaymentForm>
    </div>
  );
}
