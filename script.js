// Data-driven content generation for Python for AI website
let currentLanguage = 'en';

// Function to wait for contentData to be available
function waitForContentData(callback, maxAttempts = 50) {
    let attempts = 0;
    
    function checkData() {
        attempts++;
        console.log(`🔍 Attempt ${attempts}: Checking for contentData...`);
        
        if (typeof contentData !== 'undefined') {
            console.log('✅ contentData found!');
            callback();
            return;
        }
        
        if (attempts >= maxAttempts) {
            console.error('❌ Failed to load contentData after multiple attempts');
            showDataLoadError();
            return;
        }
        
        // Try again after a short delay
        setTimeout(checkData, 100);
    }
    
    checkData();
}

// Show error when data fails to load
function showDataLoadError() {
    document.body.innerHTML = `
        <div style="padding: 40px; text-align: center; font-family: Arial, sans-serif;">
            <h1 style="color: #dc3545; margin-bottom: 20px;">❌ 数据加载错误</h1>
            <p style="color: #6c757d; margin-bottom: 20px;">无法加载网站数据，请检查文件路径或刷新页面重试。</p>
            <button onclick="location.reload()" style="
                background: #007bff; 
                color: white; 
                border: none; 
                padding: 10px 20px; 
                border-radius: 5px; 
                cursor: pointer;
                font-size: 16px;
            ">刷新页面</button>
            <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 5px; text-align: left;">
                <h3>可能的解决方案：</h3>
                <ul style="color: #495057;">
                    <li>确保 data.js 文件存在且路径正确</li>
                    <li>检查浏览器控制台是否有JavaScript错误</li>
                    <li>确保使用本地服务器运行网站</li>
                    <li>清除浏览器缓存后重试</li>
                </ul>
            </div>
        </div>
    `;
}

// Early data check
console.log('🔍 Script.js loading - checking for contentData...');
console.log('contentData type:', typeof contentData);
if (typeof contentData !== 'undefined') {
    console.log('✅ contentData available immediately');
} else {
    console.log('⏳ contentData not yet available, will check after DOM load');
}

// Utility functions
function getText(textObj) {
    if (!textObj) {
        console.warn('getText called with null/undefined object');
        return '';
    }
    
    // If it's already a string, return it directly
    if (typeof textObj === 'string') {
        return textObj;
    }
    
    // If it's an object, try to get the current language or fallback to English
    const result = textObj[currentLanguage] || textObj.en || textObj.zh || '';
    
    if (!result && typeof textObj === 'object') {
        console.warn('getText: No text found for language', currentLanguage, 'in object:', textObj);
        // Return first available value as fallback
        const values = Object.values(textObj);
        return values.length > 0 ? values[0] : '';
    }
    
    return result;
}

// Helper function to format Markdown text to HTML
function formatMarkdown(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // Bold text
        .replace(/\*(.*?)\*/g, '<em>$1</em>')             // Italic text
        .replace(/`(.*?)`/g, '<code>$1</code>')           // Inline code
        .replace(/\n/g, '<br>');                          // Line breaks
}

function setElementText(elementId, textObj) {
    const element = document.getElementById(elementId);
    if (element && textObj) {
        element.innerHTML = getText(textObj);
    }
}

// Generate Table of Contents
function generateTOC() {
    const tocList = document.getElementById('tocList');
    const tocTitle = document.getElementById('tocTitle');
    
    if (tocTitle && contentData?.sectionTitles?.toc) {
        setElementText('tocTitle', contentData.sectionTitles.toc);
    }
    
    if (!tocList) return;

    const tocStructure = [
        { 
            id: 'hero', 
            en: 'Introduction', 
            zh: '介绍',
            level: 1,
            subitems: [
                { id: 'hero', en: 'Overview', zh: '概述' },
                { id: 'hero-stats', en: 'Key Statistics', zh: '关键统计' }
            ]
        },
        { 
            id: 'history', 
            en: 'Python History', 
            zh: 'Python历史',
            level: 1,
            subitems: [
                { id: 'history', en: 'Birth of Python (1991)', zh: 'Python诞生 (1991)' },
                { id: 'history', en: 'NumPy Era (2001)', zh: 'NumPy时代 (2001)' },
                { id: 'history', en: 'Big Data Explosion (2010)', zh: '大数据爆发 (2010)' },
                { id: 'history', en: 'AI Gold Rush (2017)', zh: 'AI淘金热 (2017)' },
                { id: 'history', en: 'Current Dominance (2024)', zh: '当前主导地位 (2024)' }
            ]
        },
        { 
            id: 'comparison', 
            en: 'Language Comparison', 
            zh: '语言对比',
            level: 1,
            subitems: [
                { id: 'comparison', en: 'Python vs Java', zh: 'Python vs Java' },
                { id: 'comparison', en: 'Python vs C++', zh: 'Python vs C++' },
                { id: 'comparison', en: 'Python vs JavaScript', zh: 'Python vs JavaScript' },
                { id: 'comparison', en: 'Indentation Challenges', zh: '缩进挑战' }
            ]
        },
        { 
            id: 'libraries', 
            en: 'AI Libraries', 
            zh: 'AI库',
            level: 1,
            subitems: [
                { id: 'numpy-section', en: 'NumPy', zh: 'NumPy' },
                { id: 'pandas-section', en: 'Pandas', zh: 'Pandas' },
                { id: 'tensorflow-section', en: 'TensorFlow', zh: 'TensorFlow' },
                { id: 'pytorch-section', en: 'PyTorch', zh: 'PyTorch' },
                { id: 'openai-section', en: 'OpenAI API', zh: 'OpenAI API' },
                { id: 'scikit-section', en: 'Scikit-learn', zh: 'Scikit-learn' }
            ]
        },
        { 
            id: 'tips', 
            en: 'Syntax Challenges', 
            zh: '语法难点',
            level: 1,
            subitems: [
                { id: 'indentation', en: 'Indentation Nightmare', zh: '缩进噩梦' },
                { id: 'comprehensions', en: 'List Comprehensions', zh: '列表推导式' },
                { id: 'exceptions', en: 'Exception Handling', zh: '异常处理' },
                { id: 'lambda', en: 'Lambda Functions', zh: 'Lambda函数' },
                { id: 'strings', en: 'String Formatting', zh: '字符串格式化' },
                { id: 'mutability', en: 'Mutability Trap', zh: '可变性陷阱' },
                { id: 'init', en: 'Module Structure', zh: '模块化' },
                { id: 'imports', en: 'Import Statements', zh: 'Import语句' },
                { id: 'pycache', en: '__pycache__ Mystery', zh: '__pycache__神秘' }
            ]
        }
    ];

    tocList.innerHTML = tocStructure.map(item => `
        <li class="toc-item level-1 ${item.subitems ? 'expandable expanded' : ''}" data-section="${item.id}">
            <a href="#${item.id}" class="toc-link">
                <span class="toc-text">${getText(item)}</span>
                ${item.subitems ? '<span class="toc-expand">▶</span>' : ''}
            </a>
            ${item.subitems ? `
                <ul class="toc-subitems expanded">
                    ${item.subitems.map(subitem => `
                        <li class="toc-item level-2">
                            <a href="#${item.id === 'tips' ? 'challenge-' + subitem.id : subitem.id}" class="toc-link">
                                <span class="toc-text">${getText(subitem)}</span>
                            </a>
                        </li>
                    `).join('')}
                </ul>
            ` : ''}
        </li>
    `).join('');
    
    // Add click handlers for expandable items
    const expandableItems = tocList.querySelectorAll('.toc-item.expandable');
    expandableItems.forEach(item => {
        const link = item.querySelector('.toc-link');
        const expand = item.querySelector('.toc-expand');
        
        if (expand) {
            expand.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                item.classList.toggle('expanded');
            });
        }
    });
}

// Generate Navigation
function generateNavigation() {
    const navMenu = document.getElementById('navMenu');
    const navLogo = document.getElementById('navLogo');
    
    if (navLogo && contentData?.navigation?.logo) {
        navLogo.textContent = contentData.navigation.logo;
    }
    
    if (navMenu && contentData?.navigation?.menuItems) {
        // Clear existing nav items (but keep language switcher)
        const langSwitcher = navMenu.querySelector('.language-switcher');
        const existingNavItems = navMenu.querySelectorAll('.nav-item:not(.language-switcher)');
        existingNavItems.forEach(item => item.remove());
        
        const menuItems = contentData.navigation.menuItems.map(item => `
            <li class="nav-item">
                <a href="#${item.id}" class="nav-link">${getText(item)}</a>
            </li>
        `).join('');
        
        // Insert menu items before the language switcher
        if (langSwitcher) {
            langSwitcher.insertAdjacentHTML('beforebegin', menuItems);
        }
    }
}

// Generate Hero Section
function generateHero() {
    if (!contentData?.hero) return;
    
    setElementText('heroTitle', contentData.hero.title);
    setElementText('heroSubtitle', contentData.hero.subtitle);
    
    const heroStats = document.getElementById('heroStats');
    if (heroStats && contentData.hero.stats) {
        heroStats.innerHTML = contentData.hero.stats.map(stat => `
            <div class="stat-item">
                <div class="stat-number">${stat.number}</div>
                <div class="stat-label">${getText(stat.label)}</div>
            </div>
        `).join('');
    }
}

// Generate Timeline
function generateTimeline() {
    if (!contentData?.timeline) return;
    
    setElementText('historyTitle', contentData.sectionTitles?.history);
    
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    
    timeline.innerHTML = contentData.timeline.map(item => `
        <div class="timeline-item">
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-content">
                <h3>${getText(item.title)}</h3>
                <p>${getText(item.description)}</p>
                <div class="story-card">
                    <div class="story-icon">${item.story.icon}</div>
                    <div class="story-content">
                        <h4>${getText(item.story.title)}</h4>
                        <p>${getText(item.story.content)}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Generate Language Comparison
function generateLanguageComparison() {
    if (!contentData?.languageComparison) return;
    
    setElementText('comparisonTitle', contentData.sectionTitles?.comparison);
    
    const comparisonContainer = document.getElementById('languageComparison');
    if (!comparisonContainer) return;
    
    comparisonContainer.innerHTML = contentData.languageComparison.map(lang => `
        <div class="comparison-card ${lang.id}-card">
            <h3>${getText(lang.name)}</h3>
            <div class="code-example">
                <pre><code class="language-${lang.id === 'cpp' ? 'cpp' : lang.id === 'javascript' ? 'javascript' : lang.id}">${getText(lang.code)}</code></pre>
            </div>
            <ul class="features">
                ${lang.features.map(feature => `
                    <li class="${feature.type}">${getText(feature.text)}</li>
                `).join('')}
            </ul>
        </div>
    `).join('');
    
    // Generate indentation story
    if (contentData.indentationStory) {
        const indentationStory = document.getElementById('indentationStory');
        if (indentationStory) {
            indentationStory.innerHTML = `
                <div class="story-icon">${contentData.indentationStory.icon}</div>
                <div class="story-content">
                    <h4>${getText(contentData.indentationStory.title)}</h4>
                    <p>${getText(contentData.indentationStory.content)}</p>
                    <div class="code-horror">
                        <div class="error-code">
                            <pre><code class="language-python">${getText(contentData.indentationStory.errorCode)}</code></pre>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}

// Generate AI Libraries
function generateLibraries() {
    if (!contentData?.aiLibraries) return;
    
    setElementText('librariesTitle', contentData.sectionTitles?.libraries);
    
    const librariesGrid = document.getElementById('librariesGrid');
    if (!librariesGrid) return;
    
    librariesGrid.innerHTML = contentData.aiLibraries.map(library => `
        <div id="${library.id}-section" class="library-card-main">
            <div class="library-info">
                <div class="library-header">
                    <img src="${library.logo}" alt="${library.id}" class="library-logo">
                    <h3>${getText(library.name)}</h3>
                </div>
                <p class="library-description">${getText(library.description)}</p>
                <div class="why-important">
                    <span class="importance-badge">🎯 ${getText(contentData.labels?.importantNote)}</span>
                    <p>${getText(library.whyImportant)}</p>
                </div>
            </div>
            <div class="code-demo-full">
                <pre><code class="language-python">${getText(library.code)}</code></pre>
            </div>
        </div>
    `).join('');
}

// Generate Syntax Challenges
function generateSyntaxChallenges() {
    if (!contentData?.syntaxChallenges) return;
    
    setElementText('syntaxTitle', contentData.sectionTitles?.syntax);
    
    const syntaxContainer = document.getElementById('syntaxChallenges');
    if (!syntaxContainer) return;
    
    syntaxContainer.innerHTML = contentData.syntaxChallenges.map(challenge => `
        <div class="syntax-challenge-item">
            <div class="challenge-header">
                <div class="challenge-title-group">
                    <h3 class="challenge-title">${getText(challenge.title)}</h3>
                    <div class="challenge-subtitle">${getText(challenge.subtitle)}</div>
                </div>
            </div>
            <div id="challenge-${challenge.id}" class="challenge-content">
                <div class="challenge-description">${getText(challenge.description)}</div>
                
                <div class="code-examples">
                    <div class="bad-example">
                        <h4>❌ ${currentLanguage === 'zh' ? '错误示例' : 'Bad Example'}:</h4>
                        <pre><code class="language-python">${getText(challenge.badExample)}</code></pre>
                    </div>
                    
                    <div class="best-practice">
                        <h4>✅ ${currentLanguage === 'zh' ? '最佳实践' : 'Best Practice'}:</h4>
                        <pre><code class="language-python">${getText(challenge.bestPractice)}</code></pre>
                    </div>
                </div>
                
                ${challenge.summary ? `
                <div class="challenge-summary">
                    <div class="summary-content">
                        ${formatMarkdown(getText(challenge.summary))}
                    </div>
                </div>
                ` : ''}

            </div>
        </div>
    `).join('');
}



// Generate Footer
function generateFooter() {
    if (!contentData?.footer) return;
    
    setElementText('footerText1', contentData.footer.text1);
    setElementText('footerText2', contentData.footer.text2);
}



// Language switching functionality
function switchLanguage() {
    // Prevent multiple rapid clicks
    const langToggle = document.getElementById('langToggle');
    if (langToggle && langToggle.disabled) return;
    
    // Disable button temporarily to prevent rapid clicking
    if (langToggle) {
        langToggle.disabled = true;
        langToggle.style.pointerEvents = 'none';
    }
    
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    console.log('Switching language to:', currentLanguage);
    
    // Update document language attribute
    document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'zh';
    
    // Show immediate feedback
    showLanguageSwitchFeedback();
    
    // Use requestAnimationFrame for smoother content updates
    requestAnimationFrame(() => {
        try {
            generateAllContent();
            console.log('Content regenerated successfully');
        } catch (error) {
            console.error('Error regenerating content:', error);
        }
        
        // Re-highlight code after content is updated
        setTimeout(() => {
            if (typeof Prism !== 'undefined') {
                Prism.highlightAll();
            }
            
            // Re-enable the button after everything is done
            if (langToggle) {
                langToggle.disabled = false;
                langToggle.style.pointerEvents = 'auto';
            }
        }, 50);
    });
}

// Show language switch feedback
function showLanguageSwitchFeedback() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;
    
    // Add smooth transition class
    langToggle.style.transition = 'all 0.3s ease';
    
    // Change background color with smooth transition
    langToggle.style.background = '#4CAF50';
    langToggle.style.transform = 'scale(1.05)';
    
    // Update the language text immediately without replacing HTML structure
    const currentLangElement = document.getElementById('currentLang');
    if (currentLangElement) {
        currentLangElement.textContent = currentLanguage === 'en' ? 'EN' : '中';
    }
    
    // Reset styles after short feedback period
    setTimeout(() => {
        langToggle.style.background = '';
        langToggle.style.transform = 'scale(1)';
    }, 300);
}

// Generate all content
function generateAllContent() {
    // Add fade effect during content update
    const mainContent = document.body;
    if (mainContent) {
        mainContent.style.opacity = '0.7';
        mainContent.style.transition = 'opacity 0.2s ease';
    }
    
    generateTOC();
    generateNavigation();
    generateHero();
    generateTimeline();
    generateLanguageComparison();
    generateLibraries();
    generateSyntaxChallenges();
    generateFooter();
    
    // Restore full opacity after content is updated
    setTimeout(() => {
        if (mainContent) {
            mainContent.style.opacity = '1';
        }
        
        // Re-apply code highlighting after content update
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }
        
        // Force hide any remaining tips sections after content update
        const tipsElements = document.querySelectorAll('.challenge-tips, [class*="tips"]');
        tipsElements.forEach(el => {
            el.style.display = 'none';
            el.remove();
        });
    }, 100);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

// TOC sidebar functionality
function initTOCSidebar() {
    const tocToggle = document.getElementById('tocToggle');
    const tocSidebar = document.getElementById('tocSidebar');
    const tocFloatBtn = document.getElementById('tocFloatBtn');
    const tocOverlay = document.getElementById('tocOverlay');
    const tocTriggerZone = document.getElementById('tocTriggerZone');
    
    let hoverTimer = null;
    let isMouseInSidebar = false;
    
    // 打开侧边栏
    function openSidebar() {
        tocSidebar.classList.add('active');
        tocOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // 禁止页面滚动
    }
    
    // 关闭侧边栏
    function closeSidebar() {
        tocSidebar.classList.remove('active');
        tocOverlay.classList.remove('active');
        document.body.style.overflow = ''; // 恢复页面滚动
    }
    
    // 鼠标移入触发区域
    if (tocTriggerZone) {
        tocTriggerZone.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimer);
            hoverTimer = setTimeout(() => {
                if (!tocSidebar.classList.contains('active')) {
                    openSidebar();
                }
            }, 300); // 300ms延迟，避免误触发
        });
        
        tocTriggerZone.addEventListener('mouseleave', function() {
            clearTimeout(hoverTimer);
        });
    }
    
    // 侧边栏鼠标事件
    if (tocSidebar) {
        tocSidebar.addEventListener('mouseenter', function() {
            isMouseInSidebar = true;
            clearTimeout(hoverTimer);
        });
        
        tocSidebar.addEventListener('mouseleave', function() {
            isMouseInSidebar = false;
            hoverTimer = setTimeout(() => {
                if (!isMouseInSidebar) {
                    closeSidebar();
                }
            }, 500); // 500ms延迟关闭
        });
    }
    
    // 浮动按钮点击事件
    if (tocFloatBtn) {
        tocFloatBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openSidebar();
        });
    }
    
    // 侧边栏切换按钮点击事件
    if (tocToggle) {
        tocToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            closeSidebar();
        });
    }
    
    // 点击遮罩层关闭侧边栏
    if (tocOverlay) {
        tocOverlay.addEventListener('click', function() {
            closeSidebar();
        });
    }
    

    
    // 点击目录链接后关闭侧边栏（仅二级目录）
    function initTOCLinks() {
        const tocLinks = document.querySelectorAll('.toc-item.level-2 .toc-link');
        tocLinks.forEach(link => {
            link.addEventListener('click', function() {
                setTimeout(() => {
                    closeSidebar();
                }, 300); // 延迟关闭，让页面有时间滚动
            });
        });
    }
    
    // ESC键关闭侧边栏
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && tocSidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
    
    // 初始化展开功能和链接事件
    setTimeout(() => {
        initTOCExpansion();
        initTOCLinks();
    }, 100);
}







// Konami Code Easter Egg
function initKonamiCode() {
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    let userInput = [];
    
    document.addEventListener('keydown', function(e) {
        userInput.push(e.code);
        if (userInput.length > konamiCode.length) {
            userInput.shift();
        }
        
        if (userInput.length === konamiCode.length && 
            userInput.every((key, index) => key === konamiCode[index])) {
            // Konami code activated!
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
                alert('🐍 Konami Code activated! You found the Python secret! 🎉');
            }, 2000);
        }
    });
    
    // Add rainbow animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM loaded, initializing website...');
    
    // Use the wait function to ensure contentData is available
    waitForContentData(function() {
        initializeWebsite();
    });
});

// Separate initialization function
function initializeWebsite() {
    console.log('✅ contentData loaded successfully');
    console.log('📊 Data summary:', {
        syntaxChallenges: contentData.syntaxChallenges?.length || 0,
        aiLibraries: contentData.aiLibraries?.length || 0,
        timeline: contentData.timeline?.length || 0,
        hero: contentData.hero ? 'available' : 'missing',
        navigation: contentData.navigation ? 'available' : 'missing'
    });
    
    // Set initial language
    console.log('🌐 Initial language:', currentLanguage);
    
    // Generate all content
    try {
        generateAllContent();
        console.log('✅ All content generated successfully');
    } catch (error) {
        console.error('❌ Error generating content:', error);
    }
    
    // Initialize interactive features
    initSmoothScrolling();
    
    // Initialize TOC sidebar after content is generated
    setTimeout(() => {
        initTOCSidebar();
    }, 100);

    initKonamiCode();
    
    // Initialize language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', switchLanguage);
        console.log('✅ Language toggle initialized');
    } else {
        console.warn('⚠️ Language toggle button not found');
    }
    
    // Set initial language display
    const currentLangElement = document.getElementById('currentLang');
    if (currentLangElement) {
        currentLangElement.textContent = currentLanguage === 'en' ? 'EN' : '中';
        console.log('✅ Language display updated');
    } else {
        console.warn('⚠️ Current language element not found');
    }
    
    // Highlight code blocks
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
        console.log('✅ Code highlighting applied');
    } else {
        console.warn('⚠️ Prism.js not available');
    }
    
    // Force hide any remaining tips sections
    const tipsElements = document.querySelectorAll('.challenge-tips, [class*="tips"]');
    tipsElements.forEach(el => {
        el.style.display = 'none';
        el.remove();
    });
    
    console.log('🐍 Python for AI website loaded successfully!');
    console.log('🎯 Ready for language switching!');
} 