"use client";
import axiosInstance from "@/services/axiosInstance";
// @ts-ignore
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { toast } from "sonner";

const handleTokenizedResponse = async (
  token: { token?: string },
  buyer: unknown
) => {
  console.log({ token }, "TOKEN RESPNMOSE");
  try {
    const data = {
      sourceId: token?.token,
      amount: "1",
      currency: "USD",
    };
    const response = await axiosInstance.post("/process-payment", data);

    console.log({ response }, "payment process response");
  } catch (error: any) {
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
