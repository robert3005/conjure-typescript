export type ErrorCode = "PERMISSION_DENIED" | "INVALID_ARGUMENT" | "NOT_FOUND" | "CONFLICT" | "REQUEST_ENTITY_TOO_LARGE" | "FAILED_PRECONDITION" | "INTERNAL" | "TIMEOUT" | "CUSTOM_CLIENT" | "CUSTOM_SERVER";

export const ErrorCode = {
    PERMISSION_DENIED: "PERMISSION_DENIED" as "PERMISSION_DENIED",
    INVALID_ARGUMENT: "INVALID_ARGUMENT" as "INVALID_ARGUMENT",
    NOT_FOUND: "NOT_FOUND" as "NOT_FOUND",
    CONFLICT: "CONFLICT" as "CONFLICT",
    REQUEST_ENTITY_TOO_LARGE: "REQUEST_ENTITY_TOO_LARGE" as "REQUEST_ENTITY_TOO_LARGE",
    FAILED_PRECONDITION: "FAILED_PRECONDITION" as "FAILED_PRECONDITION",
    INTERNAL: "INTERNAL" as "INTERNAL",
    TIMEOUT: "TIMEOUT" as "TIMEOUT",
    CUSTOM_CLIENT: "CUSTOM_CLIENT" as "CUSTOM_CLIENT",
    CUSTOM_SERVER: "CUSTOM_SERVER" as "CUSTOM_SERVER"
};