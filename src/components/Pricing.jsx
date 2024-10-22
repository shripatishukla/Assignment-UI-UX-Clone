import React, { useState } from "react";
import PricingCard from "./PricingCard";
import List from "./List";

import '../input.css';
import '../output.css';

const Pricing = () => {
  const [activePlan, setActivePlan] = useState(null);

  const handleButtonClick = (planType) => {
    setActivePlan(planType); // Set the active plan type when clicked
  };

  return (
    <div className="flex m-20 mb-16 justify-center flex-row">
      <PricingCard
        type="Enterprise"
        price="$0"
        subscription="Month"
        description="Flexible pricing without monthly fees and a 5% fee per transaction"
        buttonText="Choose Plan"
        active={activePlan === 'Enterprise'} // Check if this plan is active
        onButtonClick={() => handleButtonClick('Enterprise')} // Pass the plan type
      >
        <List>5% fee per transaction</List>
        <List>Unlimited Pages</List>
        <List>Unlimited Payments</List>
        <List>Email Notifications</List>
        <List>Weekly reports</List>
        <List>Customisation options</List>
        <List>No whitelabel branding</List>
      </PricingCard>

      <PricingCard
        type="Premium"
        price="$60"
        subscription="Month"
        description="Monthly pricing that automatically adjusts based on your transaction volume"
        buttonText="Choose Plan"
        active={activePlan === 'Premium'} // Check if this plan is active
        onButtonClick={() => handleButtonClick('Premium')} // Pass the plan type
      >
        <List>No transaction fees</List>
        <List>Unlimited Pages</List>
        <List>Unlimited Payments</List>
        <List>Email Notifications</List>
        <List>Weekly reports</List>
        <List>Customisation options</List>
        <List>No whitelabel branding</List>
      </PricingCard>
    </div>
  );
};

export default Pricing;
