import Header from "@/components/Header";
import {
  Figma,
  Github,
  FileText,
  CheckCircle,
  AlertCircle,
  Save,
  Loader,
  ExternalLink,
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface IntegrationSettings {
  figmaToken: string;
  figmaProjectId: string;
  githubRepoUrl: string;
  githubToken?: string;
  docsUrl: string;
}

interface IntegrationStatus {
  figma: "connected" | "disconnected" | "error";
  github: "connected" | "disconnected" | "error";
  docs: "connected" | "disconnected" | "error";
}

export default function Integrations() {
  const [settings, setSettings] = useState<IntegrationSettings>({
    figmaToken: "",
    figmaProjectId: "",
    githubRepoUrl: "",
    githubToken: "",
    docsUrl: "",
  });

  const [status, setStatus] = useState<IntegrationStatus>({
    figma: "disconnected",
    github: "disconnected",
    docs: "disconnected",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [isValidating, setIsValidating] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = () => {
    const saved = localStorage.getItem("designSystemIntegrations");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
        validateIntegrations(parsed);
      } catch (error) {
        console.error("Failed to load settings:", error);
      }
    }
  };

  const validateIntegrations = async (config: IntegrationSettings) => {
    setIsValidating(true);
    const newStatus: IntegrationStatus = {
      figma: "disconnected",
      github: "disconnected",
      docs: "disconnected",
    };

    if (config.figmaToken && config.figmaProjectId) {
      try {
        const response = await fetch(
          `https://api.figma.com/v1/files/${config.figmaProjectId}`,
          {
            headers: { "X-FIGMA-TOKEN": config.figmaToken },
          },
        );
        newStatus.figma = response.ok ? "connected" : "error";
      } catch (error) {
        newStatus.figma = "error";
      }
    }

    if (config.githubRepoUrl) {
      try {
        const [owner, repo] = config.githubRepoUrl
          .replace("https://github.com/", "")
          .split("/");
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`,
        );
        newStatus.github = response.ok ? "connected" : "error";
      } catch (error) {
        newStatus.github = "error";
      }
    }

    if (config.docsUrl) {
      try {
        const response = await fetch(config.docsUrl, {
          method: "HEAD",
        }).catch(() => fetch(config.docsUrl, { method: "GET" }));
        newStatus.docs = response.ok ? "connected" : "error";
      } catch (error) {
        newStatus.docs = "error";
      }
    }

    setStatus(newStatus);
    setIsValidating(false);
  };

  const handleSave = async () => {
    if (!settings.figmaToken && !settings.githubRepoUrl && !settings.docsUrl) {
      toast.error("Please add at least one integration");
      return;
    }

    setIsSaving(true);
    try {
      localStorage.setItem(
        "designSystemIntegrations",
        JSON.stringify(settings),
      );
      await validateIntegrations(settings);
      toast.success("Integration settings saved successfully");
    } catch (error) {
      toast.error("Failed to save settings");
    } finally {
      setIsSaving(false);
    }
  };

  const handleClear = (key: keyof IntegrationSettings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: "",
    }));
    toast.info(`Cleared ${key}`);
  };

  const getStatusIcon = (
    integrationStatus: "connected" | "disconnected" | "error",
  ) => {
    if (integrationStatus === "connected")
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (integrationStatus === "error")
      return <AlertCircle className="w-5 h-5 text-red-500" />;
    return <AlertCircle className="w-5 h-5 text-gray-500" />;
  };

  const getStatusText = (
    integrationStatus: "connected" | "disconnected" | "error",
  ) => {
    if (integrationStatus === "connected") return "Connected";
    if (integrationStatus === "error") return "Error";
    return "Not configured";
  };

  return (
    <div className="min-h-screen bg-atelier-bg">
      <Header />

      <div className="pt-32 pb-20 px-4 md:pt-40 md:pb-32 bg-gradient-to-b from-atelier-bg via-atelier-bg to-atelier-surface/50">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-atelier-text mb-4">
              Design System Integrations
            </h1>
            <p className="text-lg text-atelier-text/70">
              Connect your Figma libraries, GitHub repositories, and
              documentation to enable seamless design-to-code generation.
            </p>
          </div>

          <div className="space-y-8">
            {/* Figma Integration */}
            <div className="bg-atelier-surface border border-atelier-border rounded-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Figma className="w-6 h-6 text-atelier-primary" />
                  <div>
                    <h2 className="text-xl font-semibold text-atelier-text">
                      Figma Integration
                    </h2>
                    <p className="text-sm text-atelier-text/60 mt-1">
                      Connect your Figma workspace to extract design systems and
                      components
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(status.figma)}
                  <span className="text-sm font-medium text-atelier-text/70">
                    {getStatusText(status.figma)}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-atelier-text mb-2">
                    Figma API Token
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      placeholder="Enter your Figma API token"
                      value={settings.figmaToken}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          figmaToken: e.target.value,
                        }))
                      }
                      className="flex-1 px-4 py-2 bg-atelier-bg border border-atelier-border rounded-md text-atelier-text placeholder-atelier-text/40 focus:outline-none focus:border-atelier-primary"
                    />
                    {settings.figmaToken && (
                      <button
                        onClick={() => handleClear("figmaToken")}
                        className="px-3 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-md transition-colors"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-atelier-text/50 mt-1">
                    Get your token at{" "}
                    <a
                      href="https://www.figma.com/developers/api#access-tokens"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-atelier-primary hover:underline inline-flex items-center gap-1"
                    >
                      figma.com/developers/api
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-atelier-text mb-2">
                    Figma Project/File ID
                  </label>
                  <input
                    type="text"
                    placeholder="Project ID from Figma file URL"
                    value={settings.figmaProjectId}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        figmaProjectId: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-2 bg-atelier-bg border border-atelier-border rounded-md text-atelier-text placeholder-atelier-text/40 focus:outline-none focus:border-atelier-primary"
                  />
                  <p className="text-xs text-atelier-text/50 mt-1">
                    Example: figma.com/file/abc123xyz/MyProject - use abc123xyz
                  </p>
                </div>
              </div>
            </div>

            {/* GitHub Integration */}
            <div className="bg-atelier-surface border border-atelier-border rounded-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Github className="w-6 h-6 text-atelier-primary" />
                  <div>
                    <h2 className="text-xl font-semibold text-atelier-text">
                      GitHub Integration
                    </h2>
                    <p className="text-sm text-atelier-text/60 mt-1">
                      Connect your design system repository for code generation
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(status.github)}
                  <span className="text-sm font-medium text-atelier-text/70">
                    {getStatusText(status.github)}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-atelier-text mb-2">
                    Repository URL
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="https://github.com/user/design-system-repo"
                      value={settings.githubRepoUrl}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          githubRepoUrl: e.target.value,
                        }))
                      }
                      className="flex-1 px-4 py-2 bg-atelier-bg border border-atelier-border rounded-md text-atelier-text placeholder-atelier-text/40 focus:outline-none focus:border-atelier-primary"
                    />
                    {settings.githubRepoUrl && (
                      <button
                        onClick={() => handleClear("githubRepoUrl")}
                        className="px-3 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-md transition-colors"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-atelier-text mb-2">
                    GitHub Token (Optional)
                  </label>
                  <input
                    type="password"
                    placeholder="For private repositories"
                    value={settings.githubToken}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        githubToken: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-2 bg-atelier-bg border border-atelier-border rounded-md text-atelier-text placeholder-atelier-text/40 focus:outline-none focus:border-atelier-primary"
                  />
                  <p className="text-xs text-atelier-text/50 mt-1">
                    Create a token at{" "}
                    <a
                      href="https://github.com/settings/tokens"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-atelier-primary hover:underline inline-flex items-center gap-1"
                    >
                      github.com/settings/tokens
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Documentation Integration */}
            <div className="bg-atelier-surface border border-atelier-border rounded-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-atelier-primary" />
                  <div>
                    <h2 className="text-xl font-semibold text-atelier-text">
                      Documentation
                    </h2>
                    <p className="text-sm text-atelier-text/60 mt-1">
                      Link your design system documentation for AI context
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(status.docs)}
                  <span className="text-sm font-medium text-atelier-text/70">
                    {getStatusText(status.docs)}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-atelier-text mb-2">
                  Documentation URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://design-system.example.com"
                    value={settings.docsUrl}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        docsUrl: e.target.value,
                      }))
                    }
                    className="flex-1 px-4 py-2 bg-atelier-bg border border-atelier-border rounded-md text-atelier-text placeholder-atelier-text/40 focus:outline-none focus:border-atelier-primary"
                  />
                  {settings.docsUrl && (
                    <button
                      onClick={() => handleClear("docsUrl")}
                      className="px-3 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-md transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <p className="text-xs text-atelier-text/50 mt-1">
                  Supports any documentation site (Notion, Storybook, GitHub
                  Wiki, etc.)
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end pt-6 border-t border-atelier-border">
              <button
                onClick={() => loadSettings()}
                className="px-6 py-2 text-atelier-text border border-atelier-border rounded-md hover:bg-atelier-surface transition-colors"
              >
                Reset
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving || isValidating}
                className="flex items-center gap-2 px-6 py-2 bg-atelier-primary text-white rounded-md hover:bg-atelier-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving || isValidating ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Validating...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save Integrations
                  </>
                )}
              </button>
            </div>

            {/* Info Section */}
            <div className="bg-atelier-primary/10 border border-atelier-primary/30 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-atelier-text mb-3">
                What happens with your integrations?
              </h3>
              <ul className="space-y-2 text-sm text-atelier-text/70">
                <li className="flex gap-2">
                  <span className="text-atelier-primary">+</span>
                  <span>
                    AI uses your design system components as context for code
                    generation
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-atelier-primary">+</span>
                  <span>
                    Generated code follows your existing patterns and naming
                    conventions
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-atelier-primary">+</span>
                  <span>
                    Voice-to-Code, Gesture Recognition, and Real-time
                    Collaboration use your design system automatically
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-atelier-primary">+</span>
                  <span>Settings are saved locally in your browser</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
