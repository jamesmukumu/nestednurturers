import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { usePage, Head } from "@inertiajs/react";
import { A as AdminLayout } from "./AdminLayout-DuFPRx9L.js";
import "react-redux";
import "../ssr.js";
import "axios";
import "@inertiajs/react/server";
import "react-dom/server";
import "@reduxjs/toolkit";
import "./portal.esm-D9mKEukT.js";
import "react-dom";
import "./iconbase.esm-C6Zu_kc1.js";
import "react-transition-group";
import "./inputtext.esm-DDz9PXvh.js";
import "./overlayservice.esm-B2GBYfSa.js";
import "./sidebar.esm-Dou14AQP.js";
import "./Button-phcvJh3z.js";
import "./ThemeToggle-CE-bVUI6.js";
const PROFILE_API_URL = "/dashboard/profile/data";
const PROFILE_TIMEOUT_MS = 4e3;
const PROFILE_FIELDS = Object.freeze({
  header: [
    {
      key: "name",
      label: "Name",
      icon: "pi pi-user",
      formatter: (value) => ({ text: value }),
      visible: (profile) => Boolean(profile.name)
    },
    {
      key: "isAdmin",
      label: "Role",
      icon: "pi pi-shield",
      formatter: (value) => ({ text: value ? "Administrator" : "Admin account" }),
      visible: (profile) => typeof profile.isAdmin === "boolean"
    },
    {
      key: "isEmailVerified",
      label: "Email status",
      icon: "pi pi-exclamation-triangle",
      formatter: (value) => ({
        text: value ? "Verified" : "Not verified",
        icon: value ? "pi pi-check" : "pi pi-exclamation-triangle"
      }),
      visible: (profile) => typeof profile.isEmailVerified === "boolean"
    }
  ],
  contact: [
    {
      key: "email",
      label: "Email",
      icon: "pi pi-envelope",
      formatter: (value) => ({
        text: value,
        href: `mailto:${encodeURIComponent(value).replace(/%40/gi, "@")}`
      }),
      visible: (profile) => Boolean(profile.email)
    },
    {
      key: "phonenumber",
      label: "Phone",
      icon: "pi pi-phone",
      formatter: (value) => {
        const phone = value.replace(/[^\d+]/g, "");
        return {
          text: formatPhone(value),
          href: phone ? `tel:${phone}` : void 0
        };
      },
      visible: (profile) => Boolean(profile.phonenumber)
    }
  ],
  details: [
    {
      key: "created_at",
      label: "Member since",
      icon: "pi pi-calendar",
      formatter: (value) => ({ text: formatDate(value) }),
      visible: (profile) => Boolean(profile.created_at)
    },
    {
      key: "updated_at",
      label: "Last updated",
      icon: "pi pi-clock",
      formatter: (value) => ({ text: formatDate(value) }),
      visible: (profile) => Boolean(profile.updated_at)
    }
  ]
});
class ProfileRequestError extends Error {
  constructor(code, message) {
    super(message);
    this.name = "ProfileRequestError";
    this.code = code;
  }
}
function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function normalizeProfile(value) {
  if (!isRecord(value)) {
    throw new ProfileRequestError("invalid-response", "The profile response was invalid.");
  }
  const trimString = (field) => typeof value[field] === "string" ? value[field].trim() : "";
  return {
    id: typeof value.id === "number" || typeof value.id === "string" ? value.id : null,
    name: trimString("name"),
    email: trimString("email"),
    phonenumber: trimString("phonenumber"),
    isEmailVerified: typeof value.isEmailVerified === "boolean" ? value.isEmailVerified : null,
    isAdmin: typeof value.isAdmin === "boolean" ? value.isAdmin : null,
    created_at: trimString("created_at"),
    updated_at: trimString("updated_at")
  };
}
async function fetchProfile(signal) {
  const controller = new AbortController();
  let didTimeout = false;
  const timeoutId = window.setTimeout(() => {
    didTimeout = true;
    controller.abort();
  }, PROFILE_TIMEOUT_MS);
  const forwardAbort = () => controller.abort(signal.reason);
  if (signal?.aborted) {
    forwardAbort();
  } else {
    signal?.addEventListener("abort", forwardAbort, { once: true });
  }
  try {
    const response = await fetch(PROFILE_API_URL, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest"
      },
      signal: controller.signal
    });
    let payload;
    try {
      payload = await response.json();
    } catch (parseError) {
      if (didTimeout) {
        throw new ProfileRequestError("timeout", "The request took too long. Check your connection, then try again.");
      }
      if (controller.signal.aborted) {
        throw parseError;
      }
      if (response.ok) {
        throw new ProfileRequestError("invalid-response", "The profile response was invalid.");
      }
    }
    if (!response.ok) {
      if (response.status === 401) {
        throw new ProfileRequestError("unauthorized", "Your session has expired or cannot access this profile.");
      }
      if (response.status === 403) {
        throw new ProfileRequestError("forbidden", "You don’t have permission to view this profile.");
      }
      if (response.status === 404) {
        throw new ProfileRequestError("not-found", "This profile could not be found.");
      }
      if (response.status >= 500) {
        throw new ProfileRequestError("server", "The profile service is temporarily unavailable.");
      }
      throw new ProfileRequestError("http", "We could not load this profile.");
    }
    if (!isRecord(payload) || !isRecord(payload.profile)) {
      throw new ProfileRequestError("invalid-response", "The profile response was invalid.");
    }
    return normalizeProfile(payload.profile);
  } catch (error) {
    if (error instanceof ProfileRequestError) throw error;
    if (didTimeout) {
      throw new ProfileRequestError("timeout", "The request took too long. Check your connection, then try again.");
    }
    if (signal?.aborted) throw error;
    throw new ProfileRequestError("network", "We couldn’t load your profile. Check your connection, then try again.");
  } finally {
    window.clearTimeout(timeoutId);
    signal?.removeEventListener("abort", forwardAbort);
  }
}
function formatPhone(value) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return value;
}
function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }).format(date);
}
function formatProfileField(field, profile) {
  return field.formatter(profile[field.key], profile);
}
function getProfileFields(fields, profile) {
  return fields.filter((field) => field.visible(profile)).map((field) => ({
    ...field,
    formatted: formatProfileField(field, profile)
  })).filter((field) => field.formatted?.text);
}
function getInitials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0].toLocaleUpperCase()).join("") || "?";
}
function ProfileFieldList({ fields, profile, emptyMessage }) {
  const rows = getProfileFields(fields, profile);
  if (rows.length === 0) {
    return /* @__PURE__ */ jsx("p", { className: "profile-page__empty", children: emptyMessage });
  }
  return /* @__PURE__ */ jsx("dl", { className: "profile-fields", children: rows.map((field) => /* @__PURE__ */ jsxs("div", { className: "profile-fields__row", children: [
    /* @__PURE__ */ jsxs("dt", { children: [
      /* @__PURE__ */ jsx("i", { className: field.icon, "aria-hidden": "true" }),
      /* @__PURE__ */ jsx("span", { children: field.label })
    ] }),
    /* @__PURE__ */ jsxs("dd", { children: [
      field.formatted.href ? /* @__PURE__ */ jsx(
        "a",
        {
          href: field.formatted.href,
          target: field.formatted.external ? "_blank" : void 0,
          rel: field.formatted.external ? "noopener noreferrer" : void 0,
          children: field.formatted.text
        }
      ) : field.formatted.text,
      field.key === "email" && /* @__PURE__ */ jsxs("span", { className: `profile-status profile-status--email ${profile.isEmailVerified ? "is-verified" : "is-unverified"}`, children: [
        /* @__PURE__ */ jsx(
          "i",
          {
            className: profile.isEmailVerified ? "pi pi-check" : "pi pi-exclamation-triangle",
            "aria-hidden": "true"
          }
        ),
        profile.isEmailVerified ? "Verified" : "Not verified"
      ] })
    ] })
  ] }, field.key)) });
}
function ProfileSkeleton() {
  return /* @__PURE__ */ jsxs("div", { className: "profile-skeleton", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxs("div", { className: "profile-skeleton__header", children: [
      /* @__PURE__ */ jsx("span", { className: "profile-skeleton__avatar" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "profile-skeleton__line profile-skeleton__line--name" }),
        /* @__PURE__ */ jsx("span", { className: "profile-skeleton__line" }),
        /* @__PURE__ */ jsx("span", { className: "profile-skeleton__line profile-skeleton__line--short" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "profile-skeleton__grid", children: [
      /* @__PURE__ */ jsx("span", { className: "profile-skeleton__panel" }),
      /* @__PURE__ */ jsx("span", { className: "profile-skeleton__panel" })
    ] })
  ] });
}
function errorMessage(error) {
  switch (error.code) {
    case "unauthorized":
      return "Your session may have expired. Sign in again, then return to your profile.";
    case "forbidden":
      return "You don’t have permission to view this profile.";
    case "not-found":
      return "We couldn’t find this profile.";
    case "server":
      return "The profile service is temporarily unavailable. Please try again.";
    case "timeout":
      return "The request took too long. Check your connection, then try again.";
    default:
      return "We couldn’t load your profile. Check your connection, then try again.";
  }
}
function Profile() {
  const { props } = usePage();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [online, setOnline] = useState(null);
  const [sendingVerification, setSendingVerification] = useState(false);
  const [verificationError, setVerificationError] = useState("");
  const [verificationToast, setVerificationToast] = useState("");
  const [resendCountdown, setResendCountdown] = useState(0);
  const tabRefs = useRef([]);
  useEffect(() => {
    const updateOnline = () => setOnline(navigator.onLine);
    updateOnline();
    window.addEventListener("online", updateOnline);
    window.addEventListener("offline", updateOnline);
    return () => {
      window.removeEventListener("online", updateOnline);
      window.removeEventListener("offline", updateOnline);
    };
  }, []);
  useEffect(() => {
    const controller = new AbortController();
    setProfile(null);
    setError(null);
    fetchProfile(controller.signal).then(setProfile).catch((requestError) => {
      if (!controller.signal.aborted) setError(requestError);
    });
    return () => controller.abort();
  }, [attempt]);
  useEffect(() => {
    if (resendCountdown <= 0) return void 0;
    const timer = window.setTimeout(
      () => setResendCountdown((seconds) => Math.max(0, seconds - 1)),
      1e3
    );
    return () => window.clearTimeout(timer);
  }, [resendCountdown]);
  useEffect(() => {
    if (props.flash?.status === "verification-link-sent") {
      setVerificationToast("Verification email sent. Check your inbox.");
      setResendCountdown(60);
    }
  }, [props.flash?.status]);
  const sendVerificationEmail = async () => {
    setSendingVerification(true);
    setVerificationError("");
    setVerificationToast("");
    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");
      const response = await fetch("/email/verification-notification", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-TOKEN": csrfToken || ""
        }
      });
      let result = null;
      try {
        result = await response.json();
      } catch (parseError) {
        if (response.ok) {
          throw new Error("The server returned an invalid response. Please try again.");
        }
      }
      if (response.status === 429) {
        throw new Error("A verification email was sent recently. Please wait a minute before trying again.");
      }
      if (response.status === 419) {
        throw new Error("Your session expired. Refresh the page, then try again.");
      }
      if (!response.ok) {
        throw new Error("We couldn’t send the verification email. Please try again.");
      }
      if (result?.status === "already-verified") {
        setVerificationToast("Your email is already verified.");
        setAttempt((current) => current + 1);
        return;
      }
      if (result?.status !== "verification-link-sent") {
        throw new Error("The server could not confirm the verification email. Please try again.");
      }
      setVerificationToast("Verification email sent. Check your inbox.");
      setResendCountdown(60);
    } catch (requestError) {
      setVerificationError(requestError.message || "We couldn’t send the verification email. Please try again.");
    } finally {
      setSendingVerification(false);
    }
  };
  const loading = !profile && !error;
  const headerFields = profile ? getProfileFields(PROFILE_FIELDS.header, profile) : [];
  const headerName = headerFields.find((field) => field.key === "name")?.formatted.text;
  const headerRole = headerFields.find((field) => field.key === "isAdmin")?.formatted.text;
  const emailStatus = headerFields.find((field) => field.key === "isEmailVerified")?.formatted;
  const displayName = headerName || "Admin account";
  const selectTab = (nextIndex) => {
    const nextTab = nextIndex === 0 ? "overview" : "activity";
    setActiveTab(nextTab);
    tabRefs.current[nextIndex]?.focus();
  };
  const handleTabKeyDown = (event, index) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectTab((index + 1) % 2);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectTab((index + 1) % 2);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      selectTab(1);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Profile" }),
    /* @__PURE__ */ jsxs("section", { className: "profile-page", "aria-labelledby": "profile-page-heading", "aria-busy": loading, children: [
      /* @__PURE__ */ jsxs("header", { className: "profile-page__page-heading", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { id: "profile-page-heading", children: "Profile" }),
          /* @__PURE__ */ jsx("p", { children: "Your admin account details." })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: `profile-connection${online === false ? " is-offline" : ""}`, role: "status", children: [
          /* @__PURE__ */ jsx("i", { className: `pi ${online === false ? "pi-wifi-slash" : "pi-wifi"}`, "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("span", { children: online === null ? "Checking connection" : online ? "Connection online" : "You’re offline" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "profile-page__data", "aria-label": "Profile details", "aria-live": "polite", "aria-busy": loading, children: [
        loading && /* @__PURE__ */ jsx(ProfileSkeleton, {}),
        error && /* @__PURE__ */ jsxs("div", { className: "profile-message profile-message--error", role: "alert", children: [
          /* @__PURE__ */ jsx("h2", { children: "Profile unavailable" }),
          /* @__PURE__ */ jsx("p", { children: errorMessage(error) }),
          error.code === "unauthorized" && /* @__PURE__ */ jsx("a", { className: "profile-button profile-button--secondary", href: "/login", children: "Sign in" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "profile-button profile-button--primary",
              type: "button",
              onClick: () => setAttempt((current) => current + 1),
              children: "Try again"
            }
          )
        ] }),
        profile && /* @__PURE__ */ jsxs(Fragment, { children: [
          !profile.isEmailVerified && /* @__PURE__ */ jsxs("div", { className: "profile-verification-alert", role: "alert", children: [
            /* @__PURE__ */ jsx("i", { className: "pi pi-exclamation-triangle", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs("div", { className: "profile-verification-alert__content", children: [
              /* @__PURE__ */ jsx("p", { children: "Your email isn't verified. Verify it to receive notifications and recover your account." }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "profile-button profile-button--primary",
                  type: "button",
                  disabled: sendingVerification || resendCountdown > 0,
                  onClick: sendVerificationEmail,
                  children: sendingVerification ? "Sending…" : resendCountdown > 0 ? `Resend in ${resendCountdown}s` : "Send verification email"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "profile-verification-alert__feedback", "aria-live": "polite", children: verificationToast }),
              verificationError && /* @__PURE__ */ jsx("p", { className: "profile-verification-alert__error", role: "alert", children: verificationError })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { className: "profile-card profile-card--header", "aria-labelledby": "profile-name", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "profile-avatar",
                role: "img",
                "aria-label": `${displayName} initials`,
                children: getInitials(displayName)
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "profile-card__identity", children: [
              /* @__PURE__ */ jsx("h2", { id: "profile-name", children: displayName }),
              headerRole && /* @__PURE__ */ jsx("p", { children: headerRole }),
              emailStatus && /* @__PURE__ */ jsx("div", { className: "profile-status-list", children: /* @__PURE__ */ jsxs("span", { className: `profile-status ${profile.isEmailVerified ? "is-verified" : "is-unverified"}`, children: [
                /* @__PURE__ */ jsx("i", { className: emailStatus.icon, "aria-hidden": "true" }),
                emailStatus.text
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "profile-tabs", children: [
            /* @__PURE__ */ jsx("div", { className: "profile-tabs__list", role: "tablist", "aria-label": "Profile sections", children: [
              { id: "overview", label: "Overview" },
              { id: "activity", label: "Activity" }
            ].map((tab, index) => {
              const selected = activeTab === tab.id;
              return /* @__PURE__ */ jsx(
                "button",
                {
                  ref: (element) => {
                    tabRefs.current[index] = element;
                  },
                  className: "profile-tabs__tab",
                  id: `profile-tab-${tab.id}`,
                  type: "button",
                  role: "tab",
                  "aria-selected": selected,
                  "aria-controls": `profile-panel-${tab.id}`,
                  tabIndex: selected ? 0 : -1,
                  onClick: () => setActiveTab(tab.id),
                  onKeyDown: (event) => handleTabKeyDown(event, index),
                  children: tab.label
                },
                tab.id
              );
            }) }),
            /* @__PURE__ */ jsx(
              "section",
              {
                className: "profile-tab-panel",
                id: "profile-panel-overview",
                role: "tabpanel",
                "aria-labelledby": "profile-tab-overview",
                tabIndex: 0,
                hidden: activeTab !== "overview",
                children: /* @__PURE__ */ jsxs("div", { className: "profile-grid", children: [
                  /* @__PURE__ */ jsxs("section", { className: "profile-card", "aria-labelledby": "profile-about-heading", children: [
                    /* @__PURE__ */ jsx("h2", { id: "profile-about-heading", children: "About" }),
                    /* @__PURE__ */ jsx("p", { className: "profile-page__empty", children: "About information isn’t included for this admin account." })
                  ] }),
                  /* @__PURE__ */ jsxs("section", { className: "profile-card", "aria-labelledby": "profile-contact-heading", children: [
                    /* @__PURE__ */ jsx("h2", { id: "profile-contact-heading", children: "Contact" }),
                    /* @__PURE__ */ jsx(
                      ProfileFieldList,
                      {
                        fields: PROFILE_FIELDS.contact,
                        profile,
                        emptyMessage: "No contact information is available."
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("section", { className: "profile-card", "aria-labelledby": "profile-details-heading", children: [
                    /* @__PURE__ */ jsx("h2", { id: "profile-details-heading", children: "Details" }),
                    /* @__PURE__ */ jsx(
                      ProfileFieldList,
                      {
                        fields: PROFILE_FIELDS.details,
                        profile,
                        emptyMessage: "No additional details are available."
                      }
                    )
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              "section",
              {
                className: "profile-tab-panel",
                id: "profile-panel-activity",
                role: "tabpanel",
                "aria-labelledby": "profile-tab-activity",
                tabIndex: 0,
                hidden: activeTab !== "activity",
                children: /* @__PURE__ */ jsxs("section", { className: "profile-card profile-empty-activity", "aria-labelledby": "profile-activity-heading", children: [
                  /* @__PURE__ */ jsx("h2", { id: "profile-activity-heading", children: "Activity" }),
                  /* @__PURE__ */ jsx("p", { children: "No activity yet. Published work will appear here." })
                ] })
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
Profile.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  ProfileRequestError,
  Profile as default,
  fetchProfile
};
//# sourceMappingURL=Profile-Be8clt5F.js.map
