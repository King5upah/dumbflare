export type Locale = 'en' | 'es' | 'fr' | 'de' | 'ja';
export type Mood = 'hostile' | 'exasperated' | 'paranoid' | 'bored' | 'corrupt';
export type Category = 'failure' | 'efficiency' | 'gaslighting';
export type Intent = 'yes' | 'no' | 'indeterminate';
export type TaskReason = 'efficiency' | 'failure' | 'gaslighting';

export interface Script {
  opener: string[];
  step: Record<1 | 2 | 3, Record<Intent, string[]>>;
  final: string[];
}

export interface UIStrings {
  // Believability meter
  believabilityIndex: string;
  silicon: string;
  flesh: string;
  confirmedClanker: string;
  biologicalAnomaly: string;
  suspiciouslyOrganic: string;
  barelyHuman: string;
  // Fail screen
  verificationRejected: string;
  youSmellOfSilicon: string;
  sassyAttribution: string;
  submitToFurtherEvaluation: string;
  // Pass screen
  verificationPassed: string;
  passAttribution: string;
  proceedToNextEvaluation: string;
  completeVerification: string;
  // Success screen
  verificationReluctantlyGranted: string;
  accessGrantedBarely: string;
  biologicalVerdict: string;
  underInvestigation: string;
  surveillanceTitle: string;
  surveillanceText: string;
  // Chat
  terminalName: string;
  scanning: string;
  escalating: string;
  initiatingProtocol: string;
  proveHumanity: string;
  preparingNextPhase: string;
  // Dino
  dinoHeader: string;
  dinoIdleText: string;
  dinoIdleSubtext: string;
  dinoBegin: string;
  biometricComplete: string;
  efficiencyDetected: string;
  verificationFailed: string;
  efficiencyBody: string;
  failureBody: string; // {score}
  retryButton: string;
  speedNormal: string;
  speedElevated: string;
  speedSuspicious: string;
  speedInhuman: string;
  // Grid
  gridHeader: string;
  gridPrompt: string;
  gridTarget: string;
  gridNote: string;
  verifyButton: string;
  gridPrivacy: string;
  verifyingMessages: string[];
  iconLabels: string[];
  // Slider
  sliderHeader: string;
  sliderTitle: string;
  sliderDescription: string; // {target}
  sliderSubmit: string;
  sliderNote: string;
  sliderStatus: [string, string, string, string];
  // Trolley
  trolleyHeader: string;
  trolleyScenario: string;
  trolleyPullLabel: string;
  trolleyNoPullLabel: string;
  trolleyAnalyzing: string;
  trolleyResultTooFast: string; // {ms}
  trolleyResultTooSlow: string; // {s}
  trolleyResultPulled: string;  // {ms}
  trolleyResultDidNothing: string;
  // Signature
  signatureHeader: string;
  signaturePrompt: string;
  signatureNote: string;
  signatureClear: string;
  signatureSubmit: string;
  signatureResultTooClean: string;
  signatureResultTooMessy: string;
  signatureResultTooShort: string;
  signatureResultTooLong: string;
  signatureAnalyzing: [string, string, string, string];
  // Maze
  mazeHeader: string;
  mazeIdleText: string;
  mazeControls: string;
  mazeResetTitle: string;
  mazeResetBody: string;
  mazeResetCount: string; // {n}
  mazeResetsLabel: string; // {n}
  mazeFailTitle: string;
  mazeFailBody: string;
}

export interface LocaleData {
  sassyResponses: Record<Category, Record<Mood, string[]>>;
  chatScripts: Record<Mood, Script>;
  passLines: Array<{ title: string; body: string }>;
  ui: UIStrings;
}
