import { OWNER_INFO } from "@/data/toursData";

/**
 * Builds an encoded WhatsApp URL with a formatted booking inquiry message
 */
export function buildWhatsAppBookingUrl({
  name = "",
  phone = "",
  packageName = "Dwarka Darshan",
  shift = "07:30 AM To 01:00 PM",
  date = "",
  persons = "3",
  vehicleType = "Auto Riksha / 4-Wheeler Car (as per number of persons)",
  pickup = "Teen Batti Chowk, Dwarka",
  notes = "",
}) {
  const lines = [
    `🛺 *NEW TOUR BOOKING INQUIRY*`,
    `*Service:* ${OWNER_INFO.businessName}`,
    `--------------------------------`,
    `👤 *Guest Name:* ${name.trim() || "Devotee / Traveler"}`,
  ];

  if (phone.trim()) {
    lines.push(`📞 *Contact Phone:* ${phone.trim()}`);
  }

  lines.push(`📍 *Tour Package:* ${packageName}`);
  if (shift) {
    lines.push(`⏰ *Selected Shift / Timing:* ${shift}`);
  }
  if (date) {
    lines.push(`📅 *Travel Date:* ${date}`);
  }
  lines.push(`👥 *Passengers:* ${persons} Persons`);
  if (vehicleType) {
    lines.push(`🚗 *Vehicle Preference:* ${vehicleType}`);
  }
  lines.push(`🏨 *Pickup Location:* ${pickup.trim() || "Teen Batti Chowk, Dwarka"}`);

  if (notes.trim()) {
    lines.push(`📝 *Special Note:* ${notes.trim()}`);
  }

  lines.push(`--------------------------------`);
  lines.push(`_Sent via ${OWNER_INFO.businessName} Website_`);
  lines.push(`Jai Dwarkadhish! Please confirm availability & pricing.`);

  const messageText = lines.join("\n");
  const encoded = encodeURIComponent(messageText);

  return `https://wa.me/${OWNER_INFO.whatsappNumber}?text=${encoded}`;
}

/**
 * Quick inquiry message URL
 */
export function buildQuickWhatsAppUrl(topic = "Tour Inquiry") {
  const text = `Namaste 🙏\nI saw your *${OWNER_INFO.businessName}* website and would like to ask about the *${topic}*. Please share the fare details and availability.`;
  return `https://wa.me/${OWNER_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
