"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Wrapper,
  SubWrapper,
  BackText,
  BackWrapper,
} from "./CheckoutPage.style";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const CheckoutSummary = dynamic(
  () => import("./CheckoutSummary/CheckoutSummary"),
  { ssr: false }
);

const DEFAULT_VALUES = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  paymentMethod: "e-money",
  eNumber: "",
  ePIN: "",
};

const schema = yup.object().shape({
  name: yup.string().required("Name is a required field."),
  email: yup.string().email().required("Email address is a required field."),
  city: yup.string().required("City is a required field."),
  address: yup.string().required("Address is a required field."),
  zipCode: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("ZIP code is a required field."),
  phone: yup.string().matches(/^[0-9]+$/, "Must be only digits"),
  country: yup.string().required("Country is a required field."),
  paymentMethod: yup.string().required(),
  eNumber: yup.string().when("paymentMethod", {
    is: (value) => value == "e-money",
    then: (schema) =>
      schema
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("E-number is a required field."),
    otherwise: (schema) => schema.notRequired(),
  }),
  ePIN: yup.string().when("paymentMethod", {
    is: (value) => value == "e-money",
    then: (schema) =>
      schema
        .length(4)
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("E-pin is a required field."),
    otherwise: (schema) => schema.notRequired(),
  }),
});

function CheckoutPage() {
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Wrapper>
      <BackWrapper>
        <Link href={"/"} passHref legacyBehavior>
          <BackText variant="body" forwardedAs={"a"}>
            Go Back
          </BackText>
        </Link>
      </BackWrapper>
      <SubWrapper onSubmit={onSubmit} as={"form"}>
        <CheckoutForm errors={errors} register={register} watch={watch} />
        <CheckoutSummary />
      </SubWrapper>
    </Wrapper>
  );
}

export default CheckoutPage;
