function calculateCarbonFootprint(activity, amount) {
    const emissionFactors = {
        driving: 0.12, // kg CO2 per mile
        electricity: 0.45 // kg CO2 per kWh
    };
    return emissionFactors[activity] * amount;
}

function calculateAndDisplayCarbonFootprint(event) {
    event.preventDefault();

    // Show spinner and hide result
    document.getElementById("spinner").style.display = "block";
    document.getElementById("carbon-footprint-result").style.display = "none";

    const milesDriven = document.getElementById("miles-driven").value || 0;
    const electricityUsage = document.getElementById("electricity-usage").value || 0;

    // Simulate calculation delay
    setTimeout(function() {
        const totalFootprint = (calculateCarbonFootprint("driving", milesDriven) * 30) +
                               calculateCarbonFootprint("electricity", electricityUsage)

        document.getElementById("carbon-footprint-result").innerText =
            `Your estimated carbon footprint is ${totalFootprint.toFixed(2)} kg CO2.`;
        // Hide spinner and show result
        document.getElementById("spinner").style.display = "none";
        document.getElementById("carbon-footprint-result").style.display = "block";
    }, 1200);
}
