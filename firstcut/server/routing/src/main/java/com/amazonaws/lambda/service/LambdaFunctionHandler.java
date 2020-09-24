package com.amazonaws.lambda.service;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class LambdaFunctionHandler implements RequestHandler<Object, String> {

	@Override
	public String handleRequest(Object input, Context context) {
		context.getLogger().log("Input: " + input);

		// TODO: implement your handler
		return "Hello from Coders Social! This Routing feature to be merged into master";
	}
}