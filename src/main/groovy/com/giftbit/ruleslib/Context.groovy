package com.giftbit.ruleslib

import com.giftbit.ruleslib.functions.RuleFunction

interface Context {

    RuleFunction getFunction(String name)

    Value getValue(String identifier)

}
