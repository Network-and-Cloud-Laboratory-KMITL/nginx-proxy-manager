// These NaCl auth-provider strings use the English fallback until translated.
const fallbackKeys = new Set([
	"access-list.allowed-groups",
	"access-list.allowed-groups-help",
	"access-list.allowed-groups-placeholder",
	"access-list.providers",
	"access-list.providers-intro",
	"access-list.providers-none",
	"auth-provider",
	"auth-providers",
	"close",
	"column.auth-source",
	"column.provisioning",
	"column.type",
	"delete",
	"edit",
	"error.external-email-already-taken",
	"error.no-account-for-external-user",
	"login.continue-with",
	"login.no-methods",
	"login.or",
	"login.username-or-email",
	"notification.object-tested",
	"object.view",
]);

export const allowsNaClLocaleFallback = (key: string) =>
	key.startsWith("auth-provider.") || key.startsWith("auth-source.") || fallbackKeys.has(key);
