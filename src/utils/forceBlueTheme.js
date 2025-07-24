// Force Blue Theme Utility
// This script ensures the blue theme is properly applied

const forceBlueTheme = () => {
  try {
    // Clear ALL storage
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.clear();
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
    
    console.log('🧹 Cleared all storage');
    
    // Force apply all CSS variables with !important priority
    const root = document.documentElement;
    
    if (root) {
      // Background colors
      root.style.setProperty('--background-color', 'hsl(0, 0%, 4%)', 'important');
      root.style.setProperty('--background-color-2', 'hsl(0, 0%, 10%)', 'important');
      
      // Text colors  
      root.style.setProperty('--text-color', 'hsl(0, 0%, 99%)', 'important');
      root.style.setProperty('--grey-color', 'hsl(0, 0%, 85%)', 'important');
      
      // Primary blue colors
      root.style.setProperty('--primary-color', 'hsl(210, 100%, 60%)', 'important');
      root.style.setProperty('--primary-color-light', 'hsl(210, 100%, 70%)', 'important');
      root.style.setProperty('--primary-color-dark', 'hsl(210, 100%, 45%)', 'important');
      root.style.setProperty('--primary-color-ultra-light', 'hsl(210, 100%, 85%)', 'important');
      
      // Secondary colors
      root.style.setProperty('--secondary-color', 'hsl(0, 0%, 27%)', 'important');
      
      console.log('🎨 CSS variables applied with !important');
    }
    
    // Also set body styles directly
    if (document.body) {
      document.body.style.setProperty('background-color', 'hsl(0, 0%, 4%)', 'important');
      document.body.style.setProperty('color', 'hsl(0, 0%, 99%)', 'important');
      console.log('📄 Body styles applied');
    }
    
    // Set the blue theme in sessionStorage for consistency
    if (typeof sessionStorage !== 'undefined') {
      const blueTheme = {
        primaryColor: '#3399FF',
        secondaryColor: '#454545', 
        textColor: '#fdfdfd',
        backgroundColor: '#0a0a0a'
      };
      sessionStorage.setItem('customColors', JSON.stringify(blueTheme));
      console.log('💾 Blue theme saved to sessionStorage');
    }
    
    console.log('✅ Force blue theme completed successfully!');
    
  } catch (error) {
    console.error('❌ Error applying blue theme:', error);
  }
};

// Apply immediately if document exists
if (typeof document !== 'undefined') {
  forceBlueTheme();
}

// Apply when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceBlueTheme);
  } else {
    setTimeout(forceBlueTheme, 0);
  }
}

// Apply on window load as final backup
if (typeof window !== 'undefined') {
  window.addEventListener('load', forceBlueTheme);
}

export default forceBlueTheme;
