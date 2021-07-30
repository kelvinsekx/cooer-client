import React from "react";

import RegisterBanner from "../components/register/banner"
import RegisterForm from "../components/register/form"
import ChildBanner from "../components/register/childBanner"
import {registerPage as Styles} from "../components/register/register.styled"

const REGISTER = () =>
<Styles>
    <>
        <ChildBanner />
        <RegisterBanner />
        <RegisterForm />
    </>
</Styles>;

export default REGISTER;