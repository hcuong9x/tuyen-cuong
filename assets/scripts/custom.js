function getParameterValue(parameter, defaultValue = "") {
  // Get the URL parameters
  const urlParams = new URLSearchParams(window.location.search);

  // Get the raw value of the parameter
  let rawValue = urlParams.get(parameter);

  // Decode the URL-encoded value
  rawValue =
    rawValue !== null && rawValue !== undefined ? rawValue : defaultValue;

  const decodedValue = decodeURIComponent(rawValue);

  // Validate and sanitize the parameter value
  const sanitizedValue = sanitizeInput(decodedValue);

  return sanitizedValue;
}

function sanitizeInput(input) {
  // Allow only Latin and Vietnamese characters, numbers, and spaces
  const sanitizedInput = input.replace(/[&\\#,+()$~%'"*?<>{}]/g, "");

  return sanitizedInput;
}


