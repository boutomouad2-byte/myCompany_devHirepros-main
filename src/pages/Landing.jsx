import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, Zap, Shield, Users, ArrowRight, CheckCircle2, Cpu, Brain, Rocket, Globe, Code2, TrendingUp, Star, Menu, X } from "lucide-react";

const Landing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Backend data state for metrics
  const [metricsData, setMetricsData] = useState({
    growthData: [
      { 
        height: '25%', 
        label: 'Q1 2024', 
        value: '2.1K', 
        color: 'from-purple-500 to-purple-600',
        growth: '+12%',
        description: 'Strong start'
      },
      { 
        height: '45%', 
        label: 'Q2 2024', 
        value: '3.8K', 
        color: 'from-blue-500 to-blue-600',
        growth: '+81%',
        description: 'Rapid expansion'
      },
      { 
        height: '70%', 
        label: 'Q3 2024', 
        value: '5.2K', 
        color: 'from-cyan-500 to-cyan-600',
        growth: '+37%',
        description: 'Market leadership'
      },
      { 
        height: '85%', 
        label: 'Q4 2024', 
        value: '7.1K', 
        color: 'from-pink-500 to-pink-600',
        growth: '+37%',
        description: 'Record quarter'
      }
    ],
    skillsData: [
      { percentage: 85, color: 'from-purple-500 to-purple-600', label: 'React', offset: 0 },
      { percentage: 78, color: 'from-blue-500 to-blue-600', label: 'Python', offset: 90 },
      { percentage: 72, color: 'from-cyan-500 to-cyan-600', label: 'AWS', offset: 180 },
      { percentage: 68, color: 'from-pink-500 to-pink-600', label: 'Node.js', offset: 270 }
    ],
    companyMetrics: [
      {
        title: "Time to Hire",
        value: "24h",
        change: "-80%",
        icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
        gradient: "from-purple-500 to-pink-500",
        description: "Average placement time"
      },
      {
        title: "Success Rate", 
        value: "95%",
        change: "+15%",
        icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
        gradient: "from-blue-500 to-cyan-500",
        description: "Successful matches"
      },
      {
        title: "Global Reach",
        value: "150+",
        change: "+45%",
        icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
        gradient: "from-green-500 to-emerald-500", 
        description: "Countries covered"
      },
      {
        title: "AI Accuracy",
        value: "98.7%",
        change: "+12%",
        icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
        gradient: "from-orange-500 to-red-500",
        description: "Match precision rate"
      }
    ]
  });

  // Simulate real-time data updates
  useEffect(() => {
    const dataUpdateInterval = setInterval(() => {
      setMetricsData(prev => ({
        ...prev,
        companyMetrics: prev.companyMetrics.map(metric => ({
          ...metric,
          value: metric.value.includes('%') 
            ? `${(Math.random() * 5 + 93).toFixed(1)}%`
            : metric.value.includes('h')
            ? `${Math.floor(Math.random() * 8 + 20)}h`
            : metric.value.includes('+')
            ? `${Math.floor(Math.random() * 50 + 130)}+`
            : metric.value
        }))
      }));
    }, 5000);

    return () => clearInterval(dataUpdateInterval);
  }, []);

  
  // Massive state management for complex animations
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [time, setTime] = useState(new Date());
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [particleCount, setParticleCount] = useState(50);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [colorScheme, setColorScheme] = useState('purple');
  const [is3DEnabled, setIs3DEnabled] = useState(true);
  const [mouseTrail, setMouseTrail] = useState([]);
  const [orbitalRotation, setOrbitalRotation] = useState(0);
  const [waveAmplitude, setWaveAmplitude] = useState(1);
  const [pulseFrequency, setPulseFrequency] = useState(1);
  const [gridDensity, setGridDensity] = useState(100);
  const [blurIntensity, setBlurIntensity] = useState(3);
  const [glowIntensity, setGlowIntensity] = useState(0.5);
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [scaleFactor, setScaleFactor] = useState(1);
  const [opacityLevel, setOpacityLevel] = useState(0.7);
  const [transitionDuration, setTransitionDuration] = useState(300);
  const [easingFunction, setEasingFunction] = useState('ease-out');
  const [perspectiveValue, setPerspectiveValue] = useState(1000);
  const [transformOrigin, setTransformOrigin] = useState('center');
  const [backfaceVisibility, setBackfaceVisibility] = useState('hidden');
  const [transformStyle, setTransformStyle] = useState('preserve-3d');
  const [willChange, setWillChange] = useState('transform');
  const [filterValue, setFilterValue] = useState('blur(0px)');
  const [mixBlendMode, setMixBlendMode] = useState('normal');
  const [isolation, setIsolation] = useState('auto');
  const [clipPath, setClipPath] = useState('none');
  const [maskImage, setMaskImage] = useState('none');
  const [boxShadow, setBoxShadow] = useState('none');
  const [textShadow, setTextShadow] = useState('none');
  const [backgroundPosition, setBackgroundPosition] = useState('center');
  const [backgroundSize, setBackgroundSize] = useState('cover');
  const [backgroundRepeat, setBackgroundRepeat] = useState('no-repeat');
  const [backgroundAttachment, setBackgroundAttachment] = useState('scroll');
  const [backgroundOrigin, setBackgroundOrigin] = useState('padding-box');
  const [backgroundClip, setBackgroundClip] = useState('border-box');
  const [objectFit, setObjectFit] = useState('cover');
  const [objectPosition, setObjectPosition] = useState('center');
  const [borderRadius, setBorderRadius] = useState('0px');
  const [borderWidth, setBorderWidth] = useState('0px');
  const [borderStyle, setBorderStyle] = useState('solid');
  const [borderColor, setBorderColor] = useState('transparent');
  const [outlineWidth, setOutlineWidth] = useState('0px');
  const [outlineStyle, setOutlineStyle] = useState('none');
  const [outlineColor, setOutlineColor] = useState('transparent');
  const [outlineOffset, setOutlineOffset] = useState('0px');
  const [columnCount, setColumnCount] = useState('auto');
  const [columnFill, setColumnFill] = useState('balance');
  const [columnGap, setColumnGap] = useState('normal');
  const [columnRule, setColumnRule] = useState('none');
  const [columnRuleColor, setColumnRuleColor] = useState('currentColor');
  const [columnRuleStyle, setColumnRuleStyle] = useState('none');
  const [columnRuleWidth, setColumnRuleWidth] = useState('medium');
  const [columnSpan, setColumnSpan] = useState('none');
  const [columnWidth, setColumnWidth] = useState('auto');
  const [breakAfter, setBreakAfter] = useState('auto');
  const [breakBefore, setBreakBefore] = useState('auto');
  const [breakInside, setBreakInside] = useState('auto');
  const [boxDecorationBreak, setBoxDecorationBreak] = useState('slice');
  const [boxSizing, setBoxSizing] = useState('content-box');
  const [display, setDisplay] = useState('block');
  const [float, setFloat] = useState('none');
  const [clear, setClear] = useState('none');
  const [verticalAlign, setVerticalAlign] = useState('baseline');
  const [textAlign, setTextAlign] = useState('start');
  const [textAlignLast, setTextAlignLast] = useState('auto');
  const [textJustify, setTextJustify] = useState('auto');
  const [lineHeight, setLineHeight] = useState('normal');
  const [wordSpacing, setWordSpacing] = useState('normal');
  const [letterSpacing, setLetterSpacing] = useState('normal');
  const [textIndent, setTextIndent] = useState('0px');
  const [textOverflow, setTextOverflow] = useState('clip');
  const [textTransform, setTextTransform] = useState('none');
  const [whiteSpace, setWhiteSpace] = useState('normal');
  const [wordBreak, setWordBreak] = useState('normal');
  const [overflowWrap, setOverflowWrap] = useState('normal');
  const [tabSize, setTabSize] = useState(8);
  const [hyphens, setHyphens] = useState('manual');
  const [pointerEvents, setPointerEvents] = useState('auto');
  const [userSelect, setUserSelect] = useState('auto');
  const [resize, setResize] = useState('none');
  const [cursor, setCursor] = useState('auto');
  const [caretColor, setCaretColor] = useState('auto');
  const [touchAction, setTouchAction] = useState('auto');
  const [pointerEventsNone, setPointerEventsNone] = useState('none');
  const [willChangeTransform, setWillChangeTransform] = useState('transform');
  const [contain, setContain] = useState('none');
  const [contentVisibility, setContentVisibility] = useState('visible');
  const [inset, setInset] = useState('auto');
  const [top, setTop] = useState('auto');
  const [right, setRight] = useState('auto');
  const [bottom, setBottom] = useState('auto');
  const [left, setLeft] = useState('auto');
  const [zIndex, setZIndex] = useState('auto');
  const [position, setPosition] = useState('static');
  const [overflow, setOverflow] = useState('visible');
  const [overflowX, setOverflowX] = useState('visible');
  const [overflowY, setOverflowY] = useState('visible');
  const [overflowBlock, setOverflowBlock] = useState('visible');
  const [overflowInline, setOverflowInline] = useState('visible');
  const [overscrollBehavior, setOverscrollBehavior] = useState('auto');
  const [overscrollBehaviorBlock, setOverscrollBehaviorBlock] = useState('auto');
  const [overscrollBehaviorInline, setOverscrollBehaviorInline] = useState('auto');
  const [overscrollBehaviorX, setOverscrollBehaviorX] = useState('auto');
  const [overscrollBehaviorY, setOverscrollBehaviorY] = useState('auto');
  const [visibility, setVisibility] = useState('visible');
  const [opacity, setOpacity] = useState(1);
  const [isolationMode, setIsolationMode] = useState('auto');
  const [mixBlendModeValue, setMixBlendModeValue] = useState('normal');
  const [backgroundBlendMode, setBackgroundBlendMode] = useState('normal');
  const [filter, setFilter] = useState('none');
  const [backdropFilter, setBackdropFilter] = useState('none');
  const [perspective, setPerspective] = useState('none');
  const [perspectiveOrigin, setPerspectiveOrigin] = useState('50% 50%');
  const [transform, setTransform] = useState('none');
  const [transformBox, setTransformBox] = useState('view-box');
  const [transformOriginValue, setTransformOriginValue] = useState('50% 50%');
  const [backfaceVisibilityValue, setBackfaceVisibilityValue] = useState('visible');
  const [transformStyleValue, setTransformStyleValue] = useState('flat');
  const [animationName, setAnimationName] = useState('none');
  const [animationDuration, setAnimationDuration] = useState('0s');
  const [animationTimingFunction, setAnimationTimingFunction] = useState('ease');
  const [animationDelay, setAnimationDelay] = useState('0s');
  const [animationIterationCount, setAnimationIterationCount] = useState('1');
  const [animationDirection, setAnimationDirection] = useState('normal');
  const [animationFillMode, setAnimationFillMode] = useState('none');
  const [animationPlayState, setAnimationPlayState] = useState('running');
  const [transitionProperty, setTransitionProperty] = useState('all');
  const [transitionDurationValue, setTransitionDurationValue] = useState('0s');
  const [transitionTimingFunctionValue, setTransitionTimingFunctionValue] = useState('ease');
  const [transitionDelayValue, setTransitionDelayValue] = useState('0s');
  const [transitionBehavior, setTransitionBehavior] = useState('normal');

  // Your 4 images array - update these paths with your actual image paths
  const images = [
    "../../images/hero_1.jpg",
    "../../images/hero_2.png",
    "../../images/hero_4.png",
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  // Mouse tracking for futuristic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setMouseVelocity({ 
        x: e.clientX - mousePosition.x, 
        y: e.clientY - mousePosition.y 
      });
      setMouseTrail(prev => [...prev.slice(-20), { x: e.clientX, y: e.clientY }]);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mousePosition.x, mousePosition.y]);

  // Scroll position tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setActiveSection(getActiveSection());
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Window size tracking
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Time tracking for time-based animations
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setOrbitalRotation(prev => prev + rotationSpeed);
      setWaveAmplitude(1 + Math.sin(Date.now() / 1000) * 0.5);
      setPulseFrequency(1 + Math.cos(Date.now() / 2000) * 0.3);
    }, 50);
    return () => clearInterval(interval);
  }, [rotationSpeed]);

  // Complex animation controller
  useEffect(() => {
    const animationController = setInterval(() => {
      setAnimationSpeed(prev => 1 + Math.sin(Date.now() / 3000) * 0.5);
      setGlowIntensity(prev => 0.5 + Math.cos(Date.now() / 2000) * 0.3);
      setBlurIntensity(prev => 3 + Math.sin(Date.now() / 4000) * 2);
      setScaleFactor(prev => 1 + Math.sin(Date.now() / 5000) * 0.2);
      setOpacityLevel(prev => 0.7 + Math.cos(Date.now() / 3500) * 0.3);
    }, 100);
    return () => clearInterval(animationController);
  }, []);

  // Particle system controller
  useEffect(() => {
    const particleController = setInterval(() => {
      setParticleCount(prev => 50 + Math.floor(Math.sin(Date.now() / 2000) * 30));
      setGridDensity(prev => 100 + Math.floor(Math.cos(Date.now() / 3000) * 50));
    }, 500);
    return () => clearInterval(particleController);
  }, []);

  // Color scheme cycling
  useEffect(() => {
    const colorController = setInterval(() => {
      const schemes = ['purple', 'blue', 'cyan', 'pink', 'indigo', 'green'];
      const currentIndex = schemes.indexOf(colorScheme);
      setColorScheme(schemes[(currentIndex + 1) % schemes.length]);
    }, 10000);
    return () => clearInterval(colorController);
  }, [colorScheme]);

  // Complex helper functions
  const getActiveSection = () => {
    const sections = ['hero', 'features', 'stats', 'testimonials'];
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    return sections[Math.floor(scrollPercent * sections.length)] || 'hero';
  };

  const calculate3DTransform = (x, y, z) => {
    return `translate3d(${x}px, ${y}px, ${z}px)`;
  };

  const calculateRotation = (x, y, z) => {
    return `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  };

  const calculateScale = (x, y, z) => {
    return `scale3d(${x}, ${y}, ${z})`;
  };

  const calculateSkew = (x, y) => {
    return `skew(${x}deg, ${y}deg)`;
  };

  const calculateMatrix = (a, b, c, d, e, f) => {
    return `matrix(${a}, ${b}, ${c}, ${d}, ${e}, ${f})`;
  };

  const calculateMatrix3D = (values) => {
    return `matrix3d(${values.join(', ')})`;
  };

  const calculatePerspective = (distance) => {
    return `perspective(${distance}px)`;
  };

  const calculateFilter = (blur, brightness, contrast, grayscale, hueRotate, invert, saturate, sepia) => {
    return `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) grayscale(${grayscale}) hue-rotate(${hueRotate}deg) invert(${invert}) saturate(${saturate}) sepia(${sepia})`;
  };

  const calculateBoxShadow = (x, y, blur, spread, color, inset) => {
    return `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${color}`;
  };

  const calculateTextShadow = (x, y, blur, color) => {
    return `${x}px ${y}px ${blur}px ${color}`;
  };

  const calculateGradient = (type, colors, direction) => {
    const colorString = colors.join(', ');
    return `${type}-gradient(${direction}, ${colorString})`;
  };

  const calculateAnimation = (name, duration, timing, delay, iteration, direction, fill, playState) => {
    return `${name} ${duration} ${timing} ${delay} ${iteration} ${direction} ${fill} ${playState}`;
  };

  const calculateTransition = (property, duration, timing, delay) => {
    return `${property} ${duration} ${timing} ${delay}`;
  };

  const calculateTransformOrigin = (x, y, z) => {
    return `${x} ${y} ${z}`;
  };

  const calculateClipPath = (shape, values) => {
    const shapeMap = {
      circle: `circle(${values})`,
      ellipse: `ellipse(${values})`,
      inset: `inset(${values})`,
      polygon: `polygon(${values})`,
      path: `path('${values}')`
    };
    return shapeMap[shape] || 'none';
  };

  const calculateMaskImage = (source, mode, position, size, repeat) => {
    return `mask-image: url(${source}); mask-mode: ${mode}; mask-position: ${position}; mask-size: ${size}; mask-repeat: ${repeat}`;
  };

  const calculateBackdropFilter = (blur, brightness, contrast, grayscale) => {
    return `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) grayscale(${grayscale})`;
  };

  const calculateMixBlendMode = (mode) => {
    return mode;
  };

  const calculateIsolation = (mode) => {
    return mode;
  };

  const calculateWillChange = (properties) => {
    return Array.isArray(properties) ? properties.join(', ') : properties;
  };

  const calculateContain = (values) => {
    return Array.isArray(values) ? values.join(' ') : values;
  };

  const calculateContentVisibility = (mode) => {
    return mode;
  };

  const calculateInset = (top, right, bottom, left) => {
    return `${top} ${right} ${bottom} ${left}`;
  };

  const calculateOverflow = (x, y) => {
    return `${x} ${y}`;
  };

  const calculateOverscrollBehavior = (x, y) => {
    return `${x} ${y}`;
  };

  const calculateColumn = (count, width, gap, rule, ruleColor, ruleStyle, ruleWidth, span, fill) => {
    return {
      columnCount: count,
      columnWidth: width,
      columnGap: gap,
      columnRule: rule,
      columnRuleColor: ruleColor,
      columnRuleStyle: ruleStyle,
      columnRuleWidth: ruleWidth,
      columnSpan: span,
      columnFill: fill
    };
  };

  const calculateBreak = (before, after, inside) => {
    return {
      breakBefore: before,
      breakAfter: after,
      breakInside: inside
    };
  };

  const calculateBoxDecoration = (breakValue) => {
    return breakValue;
  };

  const calculateBoxSizing = (mode) => {
    return mode;
  };

  const calculateLayout = (display, position, float, clear, verticalAlign) => {
    return {
      display,
      position,
      float,
      clear,
      verticalAlign
    };
  };

  const calculateText = (align, alignLast, justify, lineHeight, wordSpacing, letterSpacing, indent, overflow, transform, whiteSpace, wordBreak, overflowWrap, tabSize, hyphens) => {
    return {
      textAlign: align,
      textAlignLast: alignLast,
      textJustify: justify,
      lineHeight,
      wordSpacing,
      letterSpacing,
      textIndent: indent,
      textOverflow: overflow,
      textTransform: transform,
      whiteSpace,
      wordBreak,
      overflowWrap,
      tabSize,
      hyphens
    };
  };

  const calculateInteraction = (pointerEvents, userSelect, resize, cursor, caretColor, touchAction) => {
    return {
      pointerEvents,
      userSelect,
      resize,
      cursor,
      caretColor,
      touchAction
    };
  };

  const calculateBorder = (width, style, color, radius, outlineWidth, outlineStyle, outlineColor, outlineOffset) => {
    return {
      borderWidth: width,
      borderStyle: style,
      borderColor: color,
      borderRadius: radius,
      outlineWidth,
      outlineStyle,
      outlineColor,
      outlineOffset
    };
  };

  const calculateBackground = (position, size, repeat, attachment, origin, clip, color, image, blendMode) => {
    return {
      backgroundPosition: position,
      backgroundSize: size,
      backgroundRepeat: repeat,
      backgroundAttachment: attachment,
      backgroundOrigin: origin,
      backgroundClip: clip,
      backgroundColor: color,
      backgroundImage: image,
      backgroundBlendMode: blendMode
    };
  };

  const calculateObject = (fit, position) => {
    return {
      objectFit: fit,
      objectPosition: position
    };
  };

  const calculateFilterComplex = (blur, brightness, contrast, grayscale, hueRotate, invert, saturate, sepia, dropShadow) => {
    const filters = [];
    if (blur) filters.push(`blur(${blur}px)`);
    if (brightness) filters.push(`brightness(${brightness})`);
    if (contrast) filters.push(`contrast(${contrast})`);
    if (grayscale) filters.push(`grayscale(${grayscale})`);
    if (hueRotate) filters.push(`hue-rotate(${hueRotate}deg)`);
    if (invert) filters.push(`invert(${invert})`);
    if (saturate) filters.push(`saturate(${saturate})`);
    if (sepia) filters.push(`sepia(${sepia})`);
    if (dropShadow) filters.push(`drop-shadow(${dropShadow})`);
    return filters.join(' ');
  };

  const calculateAnimationComplex = (animations) => {
    return animations.map(anim => {
      const { name, duration, timing, delay, iteration, direction, fill, playState } = anim;
      return `${name} ${duration} ${timing} ${delay} ${iteration} ${direction} ${fill} ${playState}`;
    }).join(', ');
  };

  const calculateTransitionComplex = (transitions) => {
    return transitions.map(trans => {
      const { property, duration, timing, delay } = trans;
      return `${property} ${duration} ${timing} ${delay}`;
    }).join(', ');
  };

  const calculateTransformComplex = (transforms) => {
    return transforms.map(trans => {
      const { type, values } = trans;
      switch (type) {
        case 'translate': return `translate(${values.join('px, ')}px)`;
        case 'translate3d': return `translate3d(${values.join('px, ')}px)`;
        case 'translateX': return `translateX(${values[0]}px)`;
        case 'translateY': return `translateY(${values[0]}px)`;
        case 'translateZ': return `translateZ(${values[0]}px)`;
        case 'scale': return `scale(${values.join(', ')})`;
        case 'scale3d': return `scale3d(${values.join(', ')})`;
        case 'scaleX': return `scaleX(${values[0]})`;
        case 'scaleY': return `scaleY(${values[0]})`;
        case 'scaleZ': return `scaleZ(${values[0]})`;
        case 'rotate': return `rotate(${values[0]}deg)`;
        case 'rotate3d': return `rotate3d(${values.join(', ')})`;
        case 'rotateX': return `rotateX(${values[0]}deg)`;
        case 'rotateY': return `rotateY(${values[0]}deg)`;
        case 'rotateZ': return `rotateZ(${values[0]}deg)`;
        case 'skew': return `skew(${values.join('deg, ')}deg)`;
        case 'skewX': return `skewX(${values[0]}deg)`;
        case 'skewY': return `skewY(${values[0]}deg)`;
        case 'matrix': return `matrix(${values.join(', ')})`;
        case 'matrix3d': return `matrix3d(${values.join(', ')})`;
        case 'perspective': return `perspective(${values[0]}px)`;
        default: return '';
      }
    }).join(' ');
  };

  // Complex animation generators
  const generateParticleAnimation = (index, total) => {
    const delay = (index / total) * 5;
    const duration = 20 + Math.random() * 10;
    const amplitude = 100 + Math.random() * 200;
    const frequency = 0.5 + Math.random() * 1.5;
    return {
      animationName: `particle-float-${index}`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
      animationFillMode: 'none',
      animationPlayState: 'running'
    };
  };

  const generateOrbitalAnimation = (radius, speed, direction) => {
    return {
      animationName: 'orbital-motion',
      animationDuration: `${speed}s`,
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationDirection: direction,
      animationFillMode: 'none',
      animationPlayState: 'running',
      transform: `rotate(0deg) translateX(${radius}px) rotate(0deg)`
    };
  };

  const generatePulseAnimation = (scale, duration) => {
    return {
      animationName: 'pulse-effect',
      animationDuration: `${duration}s`,
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
      animationFillMode: 'none',
      animationPlayState: 'running',
      transform: `scale(${scale})`
    };
  };

  const generateWaveAnimation = (amplitude, frequency, phase) => {
    return {
      animationName: 'wave-motion',
      animationDuration: `${10 / frequency}s`,
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationDirection: 'normal',
      animationFillMode: 'none',
      animationPlayState: 'running',
      transform: `translateY(${Math.sin(phase) * amplitude}px)`
    };
  };

  const generateGlowAnimation = (intensity, color) => {
    return {
      animationName: 'glow-effect',
      animationDuration: '3s',
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
      animationFillMode: 'none',
      animationPlayState: 'running',
      boxShadow: `0 0 ${20 * intensity}px ${color}`
    };
  };

  const generateRotationAnimation = (axis, speed, direction) => {
    return {
      animationName: `${axis}-rotation`,
      animationDuration: `${speed}s`,
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationDirection: direction,
      animationFillMode: 'none',
      animationPlayState: 'running',
      transform: `rotate${axis.toUpperCase()}(0deg)`
    };
  };

  const generateComplexAnimation = (type, params) => {
    const animations = [];
    
    switch (type) {
      case 'particle':
        for (let i = 0; i < params.count; i++) {
          animations.push(generateParticleAnimation(i, params.count));
        }
        break;
      case 'orbital':
        animations.push(generateOrbitalAnimation(params.radius, params.speed, params.direction));
        break;
      case 'pulse':
        animations.push(generatePulseAnimation(params.scale, params.duration));
        break;
      case 'wave':
        animations.push(generateWaveAnimation(params.amplitude, params.frequency, params.phase));
        break;
      case 'glow':
        animations.push(generateGlowAnimation(params.intensity, params.color));
        break;
      case 'rotation':
        animations.push(generateRotationAnimation(params.axis, params.speed, params.direction));
        break;
      default:
        break;
    }
    
    return animations;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Matching",
      description: "Advanced algorithms analyze skills, experience, and cultural fit to find perfect candidates instantly.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Real-time Code Assessment",
      description: "Evaluate technical skills with live coding challenges and automated scoring systems.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Data-driven insights to predict candidate success and optimize hiring decisions.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with full compliance to data protection regulations.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Talent Pool",
      description: "Access to millions of developers worldwide with diverse skills and backgrounds.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Reduce hiring time by 80% with streamlined workflows and automation.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Developers", icon: <Code2 className="w-6 h-6" /> },
    { number: "1000+", label: "Companies", icon: <Globe className="w-6 h-6" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24h", label: "Avg. Hire Time", icon: <Rocket className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative" style={{
      backgroundImage: 'url("../../images/hero_1.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Animated 3D Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/40 to-slate-900"></div>
        
        {/* 3D Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating 3D Cubes */}
          <div className="absolute top-10 left-10 w-32 h-32 animate-3d-cube">
            <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-purple-400/30 transform-gpu"></div>
          </div>
          <div className="absolute top-1/3 right-20 w-24 h-24 animate-3d-cube-reverse">
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/30 to-pink-500/30 border border-cyan-400/30 transform-gpu"></div>
          </div>
          
          {/* 3D Spheres */}
          <div className="absolute top-1/4 right-1/3 w-40 h-40 animate-3d-sphere">
            <div className="w-full h-full bg-gradient-to-tr from-blue-500/40 to-purple-500/40 rounded-full shadow-2xl"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/4 w-36 h-36 animate-3d-sphere-reverse">
            <div className="w-full h-full bg-gradient-to-tr from-pink-500/40 to-cyan-500/40 rounded-full shadow-2xl"></div>
          </div>
        </div>
        
        {/* Enhanced Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/25 to-blue-600/25 rounded-full blur-3xl animate-float-orb-3d"></div>
        <div className="absolute top-1/2 right-0 w-[700px] h-[700px] bg-gradient-to-r from-cyan-600/25 to-pink-600/25 rounded-full blur-3xl animate-float-orb-3d-reverse"></div>
        <div className="absolute bottom-0 left-1/2 w-[900px] h-[900px] bg-gradient-to-r from-indigo-600/25 to-purple-600/25 rounded-full blur-3xl animate-float-orb-3d"></div>
        
        {/* Enhanced particle system */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/50 to-cyan-400/50 rounded-full animate-particle-float-3d"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${20 + Math.random() * 15}s`
              }}
            />
          ))}
        </div>
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/15 bg-[size:80px_80px] animate-grid-move-3d"></div>
        
        {/* Triple mouse follower system */}
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-500/40 via-pink-500/30 to-cyan-500/40 rounded-full blur-3xl pointer-events-none transition-all duration-150 ease-out"
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full blur-2xl pointer-events-none transition-all duration-200 ease-out"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150
          }}
        />
        <div 
          className="absolute w-[150px] h-[150px] bg-gradient-to-r from-cyan-500/60 to-pink-500/60 rounded-full blur-xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 75,
            top: mousePosition.y - 75
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <Cpu className="w-7 h-7 text-white animate-icon-3d-spin" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">DevHire</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <Link 
              to="/register" 
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-white transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 hover:translate-z-10"
              onMouseEnter={(e) => e.target.classList.add('animate-button-3d-hover')}
              onMouseLeave={(e) => e.target.classList.remove('animate-button-3d-hover')}
            >
              Get Started
            </Link>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white w-10 h-10 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-500/30 transform-gpu transition-all duration-300 hover:scale-110 hover:rotate-6"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              to="/register"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-white transform-gpu transition-all duration-300 hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-300">AI-Powered Hiring Platform</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-text-glow">
                  <span className="block">Hire the</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Future of Tech</span>
                  <span className="block">Talent</span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-lg">
                  Revolutionize your hiring process with AI-driven candidate matching, real-time code assessments, and predictive analytics.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/register"
                  className="group px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl font-bold text-white transform-gpu transition-all duration-700 hover:scale-125 hover:shadow-4xl hover:shadow-purple-500/70 flex items-center justify-center gap-4 relative overflow-hidden animate-pulse-glow"
                  onMouseEnter={(e) => e.target.classList.add('animate-button-3d-hover')}
                  onMouseLeave={(e) => e.target.classList.remove('animate-button-3d-hover')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Rocket className="w-8 h-8 relative z-10 group-hover:animate-icon-3d-spin transform transition-all duration-500 group-hover:scale-150 group-hover:rotate-180" />
                  <span className="relative z-10 text-xl font-bold tracking-wide transform transition-all duration-500 group-hover:scale-110">Start Hiring Now</span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-90 transition-all duration-700 animate-pulse"></div>
                </Link>
                <button className="group px-12 py-6 bg-gradient-to-r from-white/15 to-white/25 backdrop-blur-xl rounded-3xl font-bold border-2 border-white/40 transform-gpu transition-all duration-700 hover:scale-125 hover:shadow-3xl hover:shadow-white/50 flex items-center justify-center gap-4 relative overflow-hidden animate-glow-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Play className="w-8 h-8 relative z-10 group-hover:animate-icon-3d-spin transform transition-all duration-500 group-hover:scale-150 group-hover:rotate-180" />
                  <span className="relative z-10 text-xl font-bold tracking-wide transform transition-all duration-500 group-hover:scale-110">Watch Demo</span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-white/30 to-white/40 rounded-3xl blur-xl opacity-30 group-hover:opacity-70 transition-all duration-700 animate-pulse"></div>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="text-purple-400">{stat.icon}</div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Content - Professional Image Showcase */}
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-3xl rotate-45 animate-spin-slow shadow-2xl shadow-purple-500/50"></div>
              <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full animate-pulse shadow-2xl shadow-cyan-500/50"></div>
              <div className="absolute top-1/2 -left-48 w-56 h-56 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-2xl animate-bounce-slow shadow-2xl shadow-indigo-500/40"></div>
              <div className="absolute top-1/3 -right-48 w-72 h-72 bg-gradient-to-r from-pink-600/30 to-cyan-600/30 rounded-full animate-float-slow shadow-2xl shadow-pink-500/40"></div>
              
              {/* Professional Showcase Container */}
              <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl rounded-3xl border-2 border-slate-700/50 overflow-hidden shadow-2xl shadow-black/50">
                {/* Professional Frame Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-purple-500/20 pointer-events-none"></div>
                <div className="absolute inset-1 rounded-3xl border border-slate-600/30 pointer-events-none"></div>
                
                {/* Professional Cover Header */}
                <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 via-black/60 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                      <div className="ml-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                        <span className="text-xs text-white/80 font-medium">DevHire Platform</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30">
                        <span className="text-xs text-purple-300 font-medium">Live Demo</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Image Gallery - Mobile Optimized */}
                <div className="mobile-image-gallery tablet-image-gallery relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/70 image-glow-effect">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
                        index === currentImageIndex 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-95'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`DevHire Dashboard ${index + 1}`}
                        className="w-full h-full object-cover object-center transform-gpu transition-all duration-1500"
                        style={{
                          filter: index === currentImageIndex ? 'brightness(1) contrast(1.1) saturate(1.1)' : 'brightness(0.8) contrast(0.9) saturate(0.9)'
                        }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 mix-blend-overlay professional-image-overlay"></div>
                    </div>
                  ))}
                  
                  {/* Controls - Mobile Optimized */}
                  <div className="mobile-controls absolute top-4 sm:top-6 lg:top-20 left-4 sm:left-6 right-4 sm:right-6 z-30 flex justify-between items-center">
                    <div className="px-3 py-1.5 sm:px-4 py-2 bg-black/70 backdrop-blur-md rounded-full border border-white/20">
                      <span className="text-xs sm:text-sm text-white font-medium">{currentImageIndex + 1} / {images.length}</span>
                    </div>
                    <div className="flex gap-2 sm:gap-3">
                      <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 hover:scale-110"
                      >
                        {isAutoPlaying ? <Pause className="w-3 h-3 sm:w-4 sm:h-4" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4" />}
                      </button>
                    </div>
                  </div>
                  
                  {/* Navigation - Mobile Optimized */}
                  <button
                    onClick={prevImage}
                    className="mobile-nav-buttons absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="mobile-nav-buttons absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </button>
                  
                  {/* Dots - Mobile Optimized */}
                  <div className="mobile-dots absolute bottom-4 sm:bottom-6 left-1/2 z-30 -translate-x-1/2 flex gap-2 sm:gap-3">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'w-6 sm:w-8 bg-white'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-6">
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">CUTTING-EDGE FEATURES</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Next-Generation Hiring
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Experience the future of recruitment with our advanced AI-powered platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "50K+", label: "Active Developers", change: "+12%" },
                { number: "1000+", label: "Companies", change: "+25%" },
                { number: "95%", label: "Success Rate", change: "+5%" },
                { number: "24h", label: "Avg. Hire Time", change: "-80%" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 mb-2">{stat.label}</div>
                  <div className={`text-sm font-semibold ${
                    stat.change.startsWith('+') ? 'text-green-400' : 'text-cyan-400'
                  }`}>
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional 3D Data Visualization Section */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-4 sm:mb-6">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-purple-300">REAL-TIME ANALYTICS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Industry-Leading Metrics
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300">
              Track your hiring success with our advanced 3D analytics dashboard
            </p>
          </div>
          
          {/* Mobile-First 3D Analytics Dashboard */}
          <div className="space-y-8 lg:space-y-12">
            {/* Professional Hiring Growth Trajectory - Mobile Responsive */}
            <div className="enhanced-metric-card mobile-touch-card relative bg-transparent backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-purple-500/40 p-4 sm:p-6 lg:p-8 overflow-hidden group" style={{animation: 'enhanced-metric-pulse 6s ease-in-out infinite'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-2xl sm:rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Hiring Growth Trajectory
                  </h3>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                    <span className="text-xs sm:text-sm font-semibold text-green-400">+238% YoY</span>
                  </div>
                </div>
                
                <div className="relative h-56 sm:h-64 lg:h-72 mb-4 sm:mb-6">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 grid-lines-animated">
                    {[0, 25, 50, 75, 100].map((line) => (
                      <div
                        key={line}
                        className="absolute w-full border-t border-gray-700/30"
                        style={{ bottom: `${line}%` }}
                      >
                        <span className="absolute -left-8 -top-2 text-xs text-gray-500">{line}%</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Professional 3D Animated Bars */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 sm:gap-3 lg:gap-4 h-full px-2">
                    {metricsData.growthData.map((bar, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center justify-end group">
                        <div className="relative w-full">
                          {/* Growth indicator */}
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                            {bar.growth}
                          </div>
                          
                          {/* Main bar with enhanced styling */}
                          <div 
                            className={`data-bar-animated professional-chart-bar chart-bar-hover w-full bg-gradient-to-t ${bar.color} rounded-t-lg transform-gpu transition-all duration-700 hover:scale-105 hover:translate-y-1 sm:hover:translate-y-2 relative group cursor-pointer`}
                            style={{ 
                              height: bar.height,
                              animation: `chart-bar-grow ${1.2 + index * 0.3}s ease-out forwards, mobile-3d-pulse ${2 + index * 0.5}s ease-in-out infinite`,
                              boxShadow: `0 -4px 20px ${bar.color.includes('purple') ? 'rgba(147, 51, 234, 0.4)' : bar.color.includes('blue') ? 'rgba(59, 130, 246, 0.4)' : bar.color.includes('cyan') ? 'rgba(6, 182, 212, 0.4)' : 'rgba(236, 72, 153, 0.4)'}`
                            }}
                          >
                            {/* Value display on bar */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs font-bold opacity-90">
                              {bar.value}
                            </div>
                            
                            {/* Animated shine effect */}
                            <div className="chart-shine-effect"></div>
                          </div>
                        </div>
                        
                        {/* Enhanced label section */}
                        <div className="mt-2 sm:mt-3 text-center">
                          <span className="text-xs sm:text-sm font-semibold text-white block">{bar.label}</span>
                          <span className="text-xs text-gray-400 block mt-1">{bar.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Trend line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                    <defs>
                      <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#9333ea', stopOpacity: 0.8 }} />
                        <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0.8 }} />
                      </linearGradient>
                    </defs>
                    <polyline
                      points="10,75 35,55 60,30 85,15"
                      fill="none"
                      stroke="url(#trendGradient)"
                      strokeWidth="2"
                      strokeDasharray="100"
                      className="trend-line-animated"
                    />
                    <circle cx="10" cy="75" r="3" fill="#9333ea" className="data-point-animated" />
                    <circle cx="35" cy="55" r="3" fill="#3b82f6" className="data-point-animated" style={{ animationDelay: '0.2s' }} />
                    <circle cx="60" cy="30" r="3" fill="#06b6d4" className="data-point-animated" style={{ animationDelay: '0.4s' }} />
                    <circle cx="85" cy="15" r="3" fill="#ec4899" className="data-point-animated" style={{ animationDelay: '0.6s' }} />
                  </svg>
                </div>
                
                {/* Enhanced footer with insights */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                  {metricsData.growthData.map((quarter, index) => (
                    <div key={index} className="text-center p-2 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30">
                      <div className="text-xs text-gray-400">{quarter.label.split(' ')[0]}</div>
                      <div className="text-sm font-bold text-white">{quarter.value}</div>
                      <div className="text-xs font-semibold text-green-400">{quarter.growth}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3D Skills Distribution - Mobile Responsive */}
            <div className="enhanced-metric-card mobile-touch-card relative bg-transparent backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-purple-500/40 p-4 sm:p-6 lg:p-8 overflow-hidden group" style={{animation: 'enhanced-metric-pulse 6s ease-in-out infinite 0.5s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 rounded-2xl sm:rounded-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  In-Demand Skills Distribution
                </h3>
                <div className="relative h-48 sm:h-56 lg:h-64 mb-4 sm:mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48">
                      {metricsData.skillsData.map((skill, index) => (
                        <div
                          key={index}
                          className="absolute inset-0"
                          style={{ transform: `rotate(${skill.offset}deg)` }}
                        >
                          <div 
                            className={`absolute top-0 left-1/2 -translate-x-1/2 w-1.5 sm:w-2 bg-gradient-to-t ${skill.color} rounded-full origin-bottom transform-gpu transition-all duration-1000 hover:scale-110`}
                            style={{ 
                              height: `${skill.percentage * 0.6}px sm:${skill.percentage * 0.8}px`,
                              animation: `mobile-float-animation ${3 + index * 0.7}s ease-in-out infinite`
                            }}
                          ></div>
                          <div 
                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 sm:-translate-y-8 bg-black/80 text-white px-1 sm:px-2 py-0.5 rounded text-xs whitespace-nowrap"
                            style={{ transform: `rotate(-${skill.offset}deg)` }}
                          >
                            <span className="hidden sm:inline">{skill.label}: </span>{skill.percentage}%
                          </div>
                        </div>
                      ))}
                      <div className="absolute inset-2 sm:inset-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full border-2 border-purple-500/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">4.2K</div>
                          <div className="text-xs text-gray-400">Active Skills</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-400">Top Technologies</span>
                  <span className="text-xs sm:text-sm font-semibold text-cyan-400">Updated Live</span>
                </div>
              </div>
            </div>

            {/* 3D Company Metrics Grid - Mobile Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {metricsData.companyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="enhanced-metric-card mobile-touch-card group relative bg-transparent backdrop-blur-xl rounded-xl sm:rounded-2xl border border-purple-500/40 p-3 sm:p-4 lg:p-6 transform-gpu transition-all duration-500 hover:scale-105 hover:translate-z-10 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{animation: `enhanced-metric-pulse 6s ease-in-out infinite ${1 + index * 0.3}s`}}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 bg-gradient-to-r ${metric.gradient} rounded-lg sm:rounded-xl mb-3 sm:mb-4 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <div className="text-white">{metric.icon}</div>
                    </div>
                    
                    <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">{metric.title}</h4>
                    <div className="flex items-baseline gap-1 sm:gap-2 mb-2">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {metric.value}
                      </span>
                      <span className={`text-xs sm:text-sm font-semibold ${
                        metric.change.startsWith('+') ? 'text-green-400' : 'text-cyan-400'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{metric.description}</p>
                    
                    <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${metric.gradient} transform-gpu transition-all duration-1000`}
                        style={{ 
                          width: '0%',
                          animation: `progress-fill ${2 + index * 0.3}s ease-out forwards`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Revolutionize Your Hiring?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using DevHire to build their dream teams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/register"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-500/30 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">DevHire</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DevHire. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes 3d-cube {
          0%, 100% {
            transform: rotateX(0deg) rotateY(0deg) translateZ(0px);
            opacity: 0.7;
          }
          25% {
            transform: rotateX(45deg) rotateY(45deg) translateZ(50px);
            opacity: 0.9;
          }
          50% {
            transform: rotateX(90deg) rotateY(90deg) translateZ(30px);
            opacity: 0.8;
          }
          75% {
            transform: rotateX(135deg) rotateY(135deg) translateZ(60px);
            opacity: 0.95;
          }
        }
        
        @keyframes 3d-cube-reverse {
          0%, 100% {
            transform: rotateX(360deg) rotateY(360deg) translateZ(0px);
            opacity: 0.7;
          }
          25% {
            transform: rotateX(315deg) rotateY(315deg) translateZ(50px);
            opacity: 0.9;
          }
          50% {
            transform: rotateX(270deg) rotateY(270deg) translateZ(30px);
            opacity: 0.8;
          }
          75% {
            transform: rotateX(225deg) rotateY(225deg) translateZ(60px);
            opacity: 0.95;
          }
        }
        
        @keyframes 3d-sphere {
          0%, 100% {
            transform: translateZ(0px) scale(1) rotateX(0deg);
            opacity: 0.6;
          }
          25% {
            transform: translateZ(100px) scale(1.2) rotateX(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateZ(50px) scale(0.9) rotateX(180deg);
            opacity: 0.7;
          }
          75% {
            transform: translateZ(150px) scale(1.1) rotateX(270deg);
            opacity: 0.9;
          }
        }
        
        @keyframes 3d-sphere-reverse {
          0%, 100% {
            transform: translateZ(0px) scale(1) rotateX(360deg);
            opacity: 0.6;
          }
          25% {
            transform: translateZ(100px) scale(1.2) rotateX(270deg);
            opacity: 0.8;
          }
          50% {
            transform: translateZ(50px) scale(0.9) rotateX(180deg);
            opacity: 0.7;
          }
          75% {
            transform: translateZ(150px) scale(1.1) rotateX(90deg);
            opacity: 0.9;
          }
        }
        
        @keyframes float-orb-3d {
          0%, 100% {
            transform: translate(0, 0) translateZ(0px) scale(1) rotateX(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translate(100px, -150px) translateZ(100px) scale(1.3) rotateX(45deg);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50px, -100px) translateZ(50px) scale(0.8) rotateX(90deg);
            opacity: 0.5;
          }
          75% {
            transform: translate(-100px, 150px) translateZ(150px) scale(1.2) rotateX(135deg);
            opacity: 0.7;
          }
        }
        
        @keyframes float-orb-3d-reverse {
          0%, 100% {
            transform: translate(0, 0) translateZ(0px) scale(1) rotateX(360deg);
            opacity: 0.4;
          }
          25% {
            transform: translate(-100px, 150px) translateZ(100px) scale(1.3) rotateX(315deg);
            opacity: 0.6;
          }
          50% {
            transform: translate(50px, 100px) translateZ(50px) scale(0.8) rotateX(270deg);
            opacity: 0.5;
          }
          75% {
            transform: translate(100px, -150px) translateZ(150px) scale(1.2) rotateX(225deg);
            opacity: 0.7;
          }
        }
        
        @keyframes particle-float-3d {
          0% {
            transform: translateY(100vh) translateX(0) translateZ(0px) scale(0) rotateX(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(90vh) translateX(-30px) translateZ(50px) scale(1) rotateX(90deg);
          }
          50% {
            transform: translateY(50vh) translateX(20px) translateZ(100px) scale(1.2) rotateX(180deg);
            opacity: 0.8;
          }
          90% {
            opacity: 1;
            transform: translateY(10vh) translateX(30px) translateZ(50px) scale(1) rotateX(270deg);
          }
          100% {
            transform: translateY(0) translateX(0) translateZ(0px) scale(0) rotateX(360deg);
            opacity: 0;
          }
        }
        
        @keyframes grid-move-3d {
          0% {
            transform: translate(0, 0) translateZ(0px) rotateX(0deg);
          }
          50% {
            transform: translate(40px, 40px) translateZ(20px) rotateX(2deg);
          }
          100% {
            transform: translate(80px, 80px) translateZ(0px) rotateX(0deg);
          }
        }
        
        @keyframes button-3d-hover {
          0% {
            transform: translateZ(0px) scale(1) rotateX(0deg);
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
          }
          50% {
            transform: translateZ(10px) scale(1.05) rotateX(-5deg);
            box-shadow: 0 10px 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(59, 130, 246, 0.6);
          }
          100% {
            transform: translateZ(15px) scale(1.1) rotateX(-10deg);
            box-shadow: 0 15px 50px rgba(147, 51, 234, 0.9), 0 0 80px rgba(59, 130, 246, 0.7);
          }
        }
        
        @keyframes icon-3d-spin {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }
        
        .animate-3d-cube {
          animation: 3d-cube 15s ease-in-out infinite;
        }
        
        .animate-3d-cube-reverse {
          animation: 3d-cube-reverse 18s ease-in-out infinite;
        }
        
        .animate-3d-sphere {
          animation: 3d-sphere 12s ease-in-out infinite;
        }
        
        .animate-3d-sphere-reverse {
          animation: 3d-sphere-reverse 14s ease-in-out infinite;
        }
        
        .animate-float-orb-3d {
          animation: float-orb-3d 25s ease-in-out infinite;
        }
        
        .animate-float-orb-3d-reverse {
          animation: float-orb-3d-reverse 30s ease-in-out infinite;
        }
        
        .animate-particle-float-3d {
          animation: particle-float-3d linear infinite;
        }
        
        .animate-grid-move-3d {
          animation: grid-move-3d 15s linear infinite;
        }
        
        .animate-button-3d-hover {
          animation: button-3d-hover 0.6s ease-in-out;
        }
        
        .animate-icon-3d-spin {
          animation: icon-3d-spin 20s linear infinite;
        }
        
        .bg-grid-white\\/15 {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px);
        }
        
        @keyframes float-orb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(50px, -100px) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-30px, -50px) scale(0.9);
            opacity: 0.7;
          }
          75% {
            transform: translate(-50px, 100px) scale(1.05);
            opacity: 0.9;
          }
        }
        
        @keyframes float-orb-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(-50px, 100px) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translate(30px, 50px) scale(0.9);
            opacity: 0.7;
          }
          75% {
            transform: translate(50px, -100px) scale(1.05);
            opacity: 0.9;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
        
        @keyframes pulse-slow-reverse {
          0%, 100% {
            transform: scale(1.2);
            opacity: 0.8;
          }
          50% {
            transform: scale(1);
            opacity: 0.5;
          }
        }
        
        @keyframes particle-float {
          0% {
            transform: translateY(100vh) translateX(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(90vh) translateX(-20px) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(10vh) translateX(20px) scale(1);
          }
          100% {
            transform: translateY(0) translateX(0) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(59, 130, 246, 0.6);
          }
        }
        
        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(147, 51, 234, 0.8), 0 0 30px rgba(59, 130, 246, 0.6);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-float-orb {
          animation: float-orb 20s ease-in-out infinite;
        }
        
        .animate-float-orb-reverse {
          animation: float-orb-reverse 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow-reverse {
          animation: pulse-slow-reverse 8s ease-in-out infinite;
        }
        
        .animate-particle-float {
          animation: particle-float linear infinite;
        }
        
        .animate-grid-move {
          animation: grid-move 10s linear infinite;
        }
        
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }
        
        .bg-grid-white\\/10 {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
        
        .delay-2000 {
          animation-delay: 2000ms;
        }
        
        /* ========================================
           MASSIVE 3D ANIMATION SYSTEM
           ======================================== */
        
        /* Professional Corporate Animations */
        @keyframes corporate-wall-slide {
          0% {
            transform: translateX(-100%) translateY(0px) translateZ(0px) rotateY(0deg);
            opacity: 0;
            filter: brightness(0.8) contrast(1.1);
          }
          20% {
            transform: translateX(-50%) translateY(-20px) translateZ(100px) rotateY(15deg);
            opacity: 0.4;
            filter: brightness(0.9) contrast(1.2);
          }
          40% {
            transform: translateX(-25%) translateY(-40px) translateZ(200px) rotateY(30deg);
            opacity: 0.7;
            filter: brightness(1) contrast(1.3);
          }
          60% {
            transform: translateX(0%) translateY(-60px) translateZ(300px) rotateY(45deg);
            opacity: 0.9;
            filter: brightness(1.1) contrast(1.4);
          }
          80% {
            transform: translateX(25%) translateY(-40px) translateZ(200px) rotateY(30deg);
            opacity: 0.7;
            filter: brightness(1) contrast(1.3);
          }
          100% {
            transform: translateX(50%) translateY(-20px) translateZ(100px) rotateY(15deg);
            opacity: 0.4;
            filter: brightness(0.9) contrast(1.2);
          }
        }
        
        @keyframes professional-data-flow {
          0% {
            transform: translateY(100vh) translateX(0px) scale(0.1) rotateZ(0deg);
            opacity: 0;
            filter: hue-rotate(0deg) brightness(0.8);
          }
          100% {
            transform: translateY(0vh) translateX(-100px) scale(2.1) rotateZ(360deg);
            opacity: 0;
            filter: hue-rotate(300deg) brightness(0.8);
          }
        }
        
        @keyframes executive-panel-glow {
          0% {
            transform: scale(1) rotateX(0deg) rotateY(0deg);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.8);
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
          }
          50% {
            transform: scale(1.1) rotateX(10deg) rotateY(20deg);
            opacity: 0.7;
            filter: brightness(1) saturate(1);
            box-shadow: 0 0 60px rgba(147, 51, 234, 0.7);
          }
          100% {
            transform: scale(1) rotateX(0deg) rotateY(0deg);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.8);
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
          }
        }
        
        @keyframes business-grid-rotate {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
            opacity: 0.4;
            filter: hue-rotate(0deg) brightness(0.9);
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(45deg) scale(1.4);
            opacity: 0.8;
            filter: hue-rotate(180deg) brightness(1.3);
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg) scale(1);
            opacity: 0.4;
            filter: hue-rotate(360deg) brightness(0.9);
          }
        }
        
        @keyframes professional-float-orbital {
          0% {
            transform: rotate(0deg) translateX(200px) rotate(0deg) scale(1);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.9);
          }
          25% {
            transform: rotate(90deg) translateX(220px) rotate(-90deg) scale(1.1);
            opacity: 0.5;
            filter: brightness(0.9) saturate(1);
          }
          50% {
            transform: rotate(180deg) translateX(250px) rotate(-180deg) scale(1.25);
            opacity: 0.8;
            filter: brightness(1.05) saturate(1.15);
          }
          75% {
            transform: rotate(270deg) translateX(220px) rotate(-270deg) scale(1.1);
            opacity: 0.5;
            filter: brightness(0.9) saturate(1);
          }
          100% {
            transform: rotate(360deg) translateX(200px) rotate(-360deg) scale(1);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.9);
          }
        }
        
        @keyframes enterprise-pulse-wave {
          0% {
            transform: scale(0.8) translateX(0px) translateY(0px);
            opacity: 0.2;
            filter: brightness(0.7) contrast(0.9);
          }
          25% {
            transform: scale(1.1) translateX(30px) translateY(-15px);
            opacity: 0.5;
            filter: brightness(0.85) contrast(1.05);
          }
          50% {
            transform: scale(1.4) translateX(60px) translateY(-30px);
            opacity: 0.8;
            filter: brightness(1) contrast(1.2);
          }
          75% {
            transform: scale(1.1) translateX(30px) translateY(-15px);
            opacity: 0.5;
            filter: brightness(0.85) contrast(1.05);
          }
          100% {
            transform: scale(0.8) translateX(0px) translateY(0px);
            opacity: 0.2;
            filter: brightness(0.7) contrast(0.9);
          }
        }
        
        @keyframes corporate-helix-spin {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px) translateY(0px);
            opacity: 0.3;
            filter: hue-rotate(0deg) brightness(0.9) saturate(0.9);
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(22.5deg) translateZ(50px) translateY(-25px);
            opacity: 0.5;
            filter: hue-rotate(90deg) brightness(1) saturate(1);
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(45deg) translateZ(100px) translateY(-50px);
            opacity: 0.8;
            filter: hue-rotate(180deg) brightness(1.15) saturate(1.15);
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(67.5deg) translateZ(50px) translateY(-25px);
            opacity: 0.5;
            filter: hue-rotate(270deg) brightness(1) saturate(1);
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg) translateZ(0px) translateY(0px);
            opacity: 0.3;
            filter: hue-rotate(360deg) brightness(0.9) saturate(0.9);
          }
        }
        
        @keyframes professional-morph-transition {
          0% {
            border-radius: 20% 80% 80% 20% / 20% 80% 20% 80%;
            transform: rotate(0deg) scale(1) translateX(0px) translateY(0px);
            opacity: 0.4;
            filter: hue-rotate(0deg) brightness(0.9) saturate(0.9);
          }
          25% {
            border-radius: 60% 40% 40% 60% / 60% 40% 60% 40%;
            transform: rotate(90deg) scale(1.2) translateX(20px) translateY(-10px);
            opacity: 0.6;
            filter: hue-rotate(90deg) brightness(1) saturate(1);
          }
          50% {
            border-radius: 100% 0% 0% 100% / 100% 0% 100% 0%;
            transform: rotate(180deg) scale(1.4) translateX(40px) translateY(-20px);
            opacity: 0.8;
            filter: hue-rotate(180deg) brightness(1.1) saturate(1.1);
          }
          75% {
            border-radius: 60% 40% 40% 60% / 60% 40% 60% 40%;
            transform: rotate(270deg) scale(1.2) translateX(20px) translateY(-10px);
            opacity: 0.6;
            filter: hue-rotate(270deg) brightness(1) saturate(1);
          }
          100% {
            border-radius: 20% 80% 80% 20% / 20% 80% 20% 80%;
            transform: rotate(360deg) scale(1) translateX(0px) translateY(0px);
            opacity: 0.4;
            filter: hue-rotate(360deg) brightness(0.9) saturate(0.9);
          }
        }
        
        /* 3D Cube Animations */
        @keyframes cube-rotate-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
            opacity: 0.3;
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(45deg) translateZ(50px);
            opacity: 0.6;
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(90deg) translateZ(100px);
            opacity: 0.9;
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(135deg) translateZ(50px);
            opacity: 0.6;
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(180deg) translateZ(0px);
            opacity: 0.3;
          }
        }
        
        @keyframes cube-float-3d {
          0%, 100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) rotateX(0deg) rotateY(0deg);
            filter: hue-rotate(0deg) brightness(1);
          }
          25% {
            transform: translateY(-30px) translateX(20px) translateZ(60px) rotateX(90deg) rotateY(45deg);
            filter: hue-rotate(90deg) brightness(1.2);
          }
          50% {
            transform: translateY(-60px) translateX(-20px) translateZ(120px) rotateX(180deg) rotateY(90deg);
            filter: hue-rotate(180deg) brightness(1.4);
          }
          75% {
            transform: translateY(-30px) translateX(-40px) translateZ(60px) rotateX(270deg) rotateY(135deg);
            filter: hue-rotate(270deg) brightness(1.2);
          }
        }
        
        @keyframes corporate-wall-expand {
          0% {
            transform: scaleX(0.1) scaleY(0.1) scaleZ(0.1) translateX(-50%) translateY(-50%);
            opacity: 0.1;
            filter: brightness(0.5) contrast(0.8);
          }
          50% {
            transform: scaleX(0.9) scaleY(0.9) scaleZ(0.9) translateX(10%) translateY(10%);
            opacity: 0.7;
            filter: brightness(1.1) contrast(1.3);
          }
          100% {
            transform: scaleX(1.5) scaleY(1.5) scaleZ(1.5) translateX(50%) translateY(50%);
            opacity: 0.3;
            filter: brightness(0.7) contrast(0.9);
          }
        }
        
        @keyframes cube-pulse-3d {
          0%, 100% {
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          25% {
            transform: scale3d(1.2, 1.2, 1.2) rotateX(90deg) rotateY(45deg) rotateZ(45deg);
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
          50% {
            transform: scale3d(1.5, 1.5, 1.5) rotateX(180deg) rotateY(90deg) rotateZ(90deg);
            box-shadow: 0 0 60px rgba(59, 130, 246, 1);
          }
          75% {
            transform: scale3d(1.2, 1.2, 1.2) rotateX(270deg) rotateY(135deg) rotateZ(135deg);
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
        }
        
        @keyframes professional-data-stream {
          0% {
            transform: translateY(-100vh) translateX(0px) rotateZ(0deg) scale(0.5);
            opacity: 0;
            filter: hue-rotate(0deg) brightness(0.8) blur(2px);
          }
          50% {
            transform: translateY(0vh) translateX(-100px) rotateZ(180deg) scale(1.5);
            opacity: 1;
            filter: hue-rotate(180deg) brightness(1.2) blur(0px);
          }
          100% {
            transform: translateY(100vh) translateX(0px) rotateZ(360deg) scale(0.5);
            opacity: 0;
            filter: hue-rotate(360deg) brightness(0.8) blur(2px);
          }
        }
        
        @keyframes executive-panel-slide {
          0% {
            transform: translateX(-100vw) translateY(0px) rotateY(90deg) scale(0.5);
            opacity: 0;
            filter: brightness(0.7) saturate(0.7);
            box-shadow: 0 0 10px rgba(147, 51, 234, 0.2);
          }
          50% {
            transform: translateX(0vw) translateY(-60px) rotateY(45deg) scale(1.1);
            opacity: 0.8;
            filter: brightness(1) saturate(1);
            box-shadow: 0 0 70px rgba(147, 51, 234, 0.8);
          }
          100% {
            transform: translateX(100vw) translateY(0px) rotateY(0deg) scale(0.5);
            opacity: 0;
            filter: brightness(0.7) saturate(0.7);
            box-shadow: 0 0 10px rgba(147, 51, 234, 0.2);
          }
        }
        
        @keyframes business-hologram-float {
          0% {
            transform: translateY(0px) translateX(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 0.3;
            filter: brightness(0.8) hue-rotate(0deg) blur(1px);
          }
          50% {
            transform: translateY(-60px) translateX(60px) translateZ(120px) rotateX(180deg) rotateY(90deg) rotateZ(45deg);
            opacity: 0.9;
            filter: brightness(1.1) hue-rotate(180deg) blur(0.4px);
          }
          100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) rotateX(360deg) rotateY(180deg) rotateZ(90deg);
            opacity: 0.3;
            filter: brightness(0.8) hue-rotate(360deg) blur(1px);
          }
        }
        
        @keyframes corporate-energy-field {
          0% {
            transform: scale(0.5) rotate(0deg) translateX(0px) translateY(0px);
            opacity: 0.2;
            filter: brightness(0.6) saturate(0.8) hue-rotate(0deg);
            box-shadow: 0 0 10px rgba(147, 51, 234, 0.3), inset 0 0 10px rgba(6, 182, 212, 0.3);
          }
          50% {
            transform: scale(1.2) rotate(180deg) translateX(80px) translateY(-40px);
            opacity: 0.9;
            filter: brightness(1) saturate(1.2) hue-rotate(180deg);
            box-shadow: 0 0 50px rgba(147, 51, 234, 0.7), inset 0 0 50px rgba(6, 182, 212, 0.7);
          }
          100% {
            transform: scale(0.5) rotate(360deg) translateX(0px) translateY(0px);
            opacity: 0.2;
            filter: brightness(0.6) saturate(0.8) hue-rotate(360deg);
            box-shadow: 0 0 10px rgba(147, 51, 234, 0.3), inset 0 0 10px rgba(6, 182, 212, 0.3);
          }
        }
        
        @keyframes professional-neural-network {
          0% {
            transform: scale(0.3) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 0.1;
            filter: brightness(0.5) contrast(0.8) hue-rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotateX(180deg) rotateY(90deg) rotateZ(45deg);
            opacity: 0.8;
            filter: brightness(0.9) contrast(1.2) hue-rotate(180deg);
          }
          100% {
            transform: scale(0.3) rotateX(360deg) rotateY(180deg) rotateZ(90deg);
            opacity: 0.1;
            filter: brightness(0.5) contrast(0.8) hue-rotate(360deg);
          }
        }
        
        @keyframes executive-vortex-spin {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.5) translateZ(0px);
            opacity: 0.2;
            filter: brightness(0.6) saturate(0.8) hue-rotate(0deg);
            box-shadow: 0 0 15px rgba(147, 51, 234, 0.3);
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(45deg) scale(1.1) translateZ(100px);
            opacity: 0.8;
            filter: brightness(1) saturate(1.1) hue-rotate(180deg);
            box-shadow: 0 0 65px rgba(147, 51, 234, 0.8);
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg) scale(0.5) translateZ(0px);
            opacity: 0.2;
            filter: brightness(0.6) saturate(0.8) hue-rotate(360deg);
            box-shadow: 0 0 15px rgba(147, 51, 234, 0.3);
          }
        }
        
        @keyframes corporate-quantum-field {
          0% {
            transform: scale(0.2) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.1;
            filter: brightness(0.4) contrast(0.7) saturate(0.8) hue-rotate(0deg) blur(2px);
          }
          50% {
            transform: scale(1.1) rotateX(180deg) rotateY(90deg) rotateZ(45deg) translateX(90px) translateY(-45px) translateZ(90px);
            opacity: 0.8;
            filter: brightness(1) contrast(1.3) saturate(1.1) hue-rotate(180deg) blur(0.8px);
          }
          100% {
            transform: scale(0.2) rotateX(360deg) rotateY(180deg) rotateZ(90deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.1;
            filter: brightness(0.4) contrast(0.7) saturate(0.8) hue-rotate(360deg) blur(2px);
          }
        }
        
        @keyframes professional-matrix-rain {
          0% {
            transform: translateY(-100vh) translateX(0px) scale(0.1) rotateZ(0deg);
            opacity: 0;
            filter: hue-rotate(120deg) brightness(0.8) blur(1px);
          }
          10% {
            transform: translateY(-80vh) translateX(-10px) scale(0.3) rotateZ(36deg);
            opacity: 0.1;
            filter: hue-rotate(108deg) brightness(0.85) blur(0.9px);
          }
          20% {
            transform: translateY(-60vh) translateX(-20px) scale(0.5) rotateZ(72deg);
            opacity: 0.2;
            filter: hue-rotate(96deg) brightness(0.9) blur(0.8px);
          }
          30% {
            transform: translateY(-40vh) translateX(-30px) scale(0.7) rotateZ(108deg);
            opacity: 0.3;
            filter: hue-rotate(84deg) brightness(0.95) blur(0.7px);
          }
          40% {
            transform: translateY(-20vh) translateX(-40px) scale(0.9) rotateZ(144deg);
            opacity: 0.4;
            filter: hue-rotate(72deg) brightness(1) blur(0.6px);
          }
          50% {
            transform: translateY(0vh) translateX(-50px) scale(1.1) rotateZ(180deg);
            opacity: 0.5;
            filter: hue-rotate(60deg) brightness(1.05) blur(0.5px);
          }
          60% {
            transform: translateY(20vh) translateX(-40px) scale(0.9) rotateZ(216deg);
            opacity: 0.4;
            filter: hue-rotate(48deg) brightness(1) blur(0.6px);
          }
          70% {
            transform: translateY(40vh) translateX(-30px) scale(0.7) rotateZ(252deg);
            opacity: 0.3;
            filter: hue-rotate(36deg) brightness(0.95) blur(0.7px);
          }
          80% {
            transform: translateY(60vh) translateX(-20px) scale(0.5) rotateZ(288deg);
            opacity: 0.2;
            filter: hue-rotate(24deg) brightness(0.9) blur(0.8px);
          }
          90% {
            transform: translateY(80vh) translateX(-10px) scale(0.3) rotateZ(324deg);
            opacity: 0.1;
            filter: hue-rotate(12deg) brightness(0.85) blur(0.9px);
          }
          100% {
            transform: translateY(100vh) translateX(0px) scale(0.1) rotateZ(360deg);
            opacity: 0;
            filter: hue-rotate(0deg) brightness(0.8) blur(1px);
          }
        }
        
        @keyframes executive-cyber-grid {
          0% {
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1);
            opacity: 0.3;
            filter: brightness(0.8) contrast(1.1) saturate(0.9);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2));
          }
          12.5% {
            transform: perspective(1000px) rotateX(45deg) rotateY(11.25deg) scale(1.1);
            opacity: 0.4;
            filter: brightness(0.85) contrast(1.15) saturate(0.95);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(6, 182, 212, 0.3));
          }
          25% {
            transform: perspective(1000px) rotateX(90deg) rotateY(22.5deg) scale(1.2);
            opacity: 0.5;
            filter: brightness(0.9) contrast(1.2) saturate(1);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.4), rgba(6, 182, 212, 0.4));
          }
          37.5% {
            transform: perspective(1000px) rotateX(135deg) rotateY(33.75deg) scale(1.3);
            opacity: 0.6;
            filter: brightness(0.95) contrast(1.25) saturate(1.05);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.5), rgba(6, 182, 212, 0.5));
          }
          50% {
            transform: perspective(1000px) rotateX(180deg) rotateY(45deg) scale(1.4);
            opacity: 0.7;
            filter: brightness(1) contrast(1.3) saturate(1.1);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.6), rgba(6, 182, 212, 0.6));
          }
          62.5% {
            transform: perspective(1000px) rotateX(225deg) rotateY(56.25deg) scale(1.3);
            opacity: 0.6;
            filter: brightness(0.95) contrast(1.25) saturate(1.05);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.5), rgba(6, 182, 212, 0.5));
          }
          75% {
            transform: perspective(1000px) rotateX(270deg) rotateY(67.5deg) scale(1.2);
            opacity: 0.5;
            filter: brightness(0.9) contrast(1.2) saturate(1);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.4), rgba(6, 182, 212, 0.4));
          }
          87.5% {
            transform: perspective(1000px) rotateX(315deg) rotateY(78.75deg) scale(1.1);
            opacity: 0.4;
            filter: brightness(0.85) contrast(1.15) saturate(0.95);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(6, 182, 212, 0.3));
          }
          100% {
            transform: perspective(1000px) rotateX(360deg) rotateY(90deg) scale(1);
            opacity: 0.3;
            filter: brightness(0.8) contrast(1.1) saturate(0.9);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2));
          }
        }
        
        @keyframes professional-dna-helix {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.9) hue-rotate(0deg);
          }
          8.33% {
            transform: rotateX(30deg) rotateY(15deg) rotateZ(7.5deg) translateX(15px) translateY(-7.5px) translateZ(15px);
            opacity: 0.4;
            filter: brightness(0.85) saturate(0.95) hue-rotate(30deg);
          }
          16.66% {
            transform: rotateX(60deg) rotateY(30deg) rotateZ(15deg) translateX(30px) translateY(-15px) translateZ(30px);
            opacity: 0.5;
            filter: brightness(0.9) saturate(1) hue-rotate(60deg);
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(22.5deg) translateX(45px) translateY(-22.5px) translateZ(45px);
            opacity: 0.6;
            filter: brightness(0.95) saturate(1.05) hue-rotate(90deg);
          }
          33.33% {
            transform: rotateX(120deg) rotateY(60deg) rotateZ(30deg) translateX(60px) translateY(-30px) translateZ(60px);
            opacity: 0.7;
            filter: brightness(1) saturate(1.1) hue-rotate(120deg);
          }
          41.66% {
            transform: rotateX(150deg) rotateY(75deg) rotateZ(37.5deg) translateX(75px) translateY(-37.5px) translateZ(75px);
            opacity: 0.8;
            filter: brightness(1.05) saturate(1.15) hue-rotate(150deg);
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(45deg) translateX(90px) translateY(-45px) translateZ(90px);
            opacity: 0.9;
            filter: brightness(1.1) saturate(1.2) hue-rotate(180deg);
          }
          58.33% {
            transform: rotateX(210deg) rotateY(105deg) rotateZ(52.5deg) translateX(75px) translateY(-37.5px) translateZ(75px);
            opacity: 0.8;
            filter: brightness(1.05) saturate(1.15) hue-rotate(210deg);
          }
          66.66% {
            transform: rotateX(240deg) rotateY(120deg) rotateZ(60deg) translateX(60px) translateY(-30px) translateZ(60px);
            opacity: 0.7;
            filter: brightness(1) saturate(1.1) hue-rotate(240deg);
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(67.5deg) translateX(45px) translateY(-22.5px) translateZ(45px);
            opacity: 0.6;
            filter: brightness(0.95) saturate(1.05) hue-rotate(270deg);
          }
          83.33% {
            transform: rotateX(300deg) rotateY(150deg) rotateZ(75deg) translateX(30px) translateY(-15px) translateZ(30px);
            opacity: 0.5;
            filter: brightness(0.9) saturate(1) hue-rotate(300deg);
          }
          91.66% {
            transform: rotateX(330deg) rotateY(165deg) rotateZ(82.5deg) translateX(15px) translateY(-7.5px) translateZ(15px);
            opacity: 0.4;
            filter: brightness(0.85) saturate(0.95) hue-rotate(330deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.9) hue-rotate(360deg);
          }
        }
        
        @keyframes corporate-photon-wave {
          0% {
            transform: scale(0.1) rotate(0deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.1;
            filter: brightness(0.3) contrast(0.7) saturate(0.8) hue-rotate(0deg) blur(3px);
            box-shadow: 0 0 5px rgba(147, 51, 234, 0.2), 0 0 10px rgba(6, 182, 212, 0.2);
          }
          10% {
            transform: scale(0.3) rotate(36deg) translateX(20px) translateY(-10px) translateZ(10px);
            opacity: 0.2;
            filter: brightness(0.4) contrast(0.8) saturate(0.85) hue-rotate(36deg) blur(2.7px);
            box-shadow: 0 0 15px rgba(147, 51, 234, 0.3), 0 0 30px rgba(6, 182, 212, 0.3);
          }
          20% {
            transform: scale(0.5) rotate(72deg) translateX(40px) translateY(-20px) translateZ(20px);
            opacity: 0.3;
            filter: brightness(0.5) contrast(0.9) saturate(0.9) hue-rotate(72deg) blur(2.4px);
            box-shadow: 0 0 25px rgba(147, 51, 234, 0.4), 0 0 50px rgba(6, 182, 212, 0.4);
          }
          30% {
            transform: scale(0.7) rotate(108deg) translateX(60px) translateY(-30px) translateZ(30px);
            opacity: 0.4;
            filter: brightness(0.6) contrast(1) saturate(0.95) hue-rotate(108deg) blur(2.1px);
            box-shadow: 0 0 35px rgba(147, 51, 234, 0.5), 0 0 70px rgba(6, 182, 212, 0.5);
          }
          40% {
            transform: scale(0.9) rotate(144deg) translateX(80px) translateY(-40px) translateZ(40px);
            opacity: 0.5;
            filter: brightness(0.7) contrast(1.1) saturate(1) hue-rotate(144deg) blur(1.8px);
            box-shadow: 0 0 45px rgba(147, 51, 234, 0.6), 0 0 90px rgba(6, 182, 212, 0.6);
          }
          50% {
            transform: scale(1.1) rotate(180deg) translateX(100px) translateY(-50px) translateZ(50px);
            opacity: 0.6;
            filter: brightness(0.8) contrast(1.2) saturate(1.05) hue-rotate(180deg) blur(1.5px);
            box-shadow: 0 0 55px rgba(147, 51, 234, 0.7), 0 0 110px rgba(6, 182, 212, 0.7);
          }
          60% {
            transform: scale(0.9) rotate(216deg) translateX(80px) translateY(-40px) translateZ(40px);
            opacity: 0.5;
            filter: brightness(0.7) contrast(1.1) saturate(1) hue-rotate(216deg) blur(1.8px);
            box-shadow: 0 0 45px rgba(147, 51, 234, 0.6), 0 0 90px rgba(6, 182, 212, 0.6);
          }
          70% {
            transform: scale(0.7) rotate(252deg) translateX(60px) translateY(-30px) translateZ(30px);
            opacity: 0.4;
            filter: brightness(0.6) contrast(1) saturate(0.95) hue-rotate(252deg) blur(2.1px);
            box-shadow: 0 0 35px rgba(147, 51, 234, 0.5), 0 0 70px rgba(6, 182, 212, 0.5);
          }
          80% {
            transform: scale(0.5) rotate(288deg) translateX(40px) translateY(-20px) translateZ(20px);
            opacity: 0.3;
            filter: brightness(0.5) contrast(0.9) saturate(0.9) hue-rotate(288deg) blur(2.4px);
            box-shadow: 0 0 25px rgba(147, 51, 234, 0.4), 0 0 50px rgba(6, 182, 212, 0.4);
          }
          90% {
            transform: scale(0.3) rotate(324deg) translateX(20px) translateY(-10px) translateZ(10px);
            opacity: 0.2;
            filter: brightness(0.4) contrast(0.8) saturate(0.85) hue-rotate(324deg) blur(2.7px);
            box-shadow: 0 0 15px rgba(147, 51, 234, 0.3), 0 0 30px rgba(6, 182, 212, 0.3);
          }
          100% {
            transform: scale(0.1) rotate(360deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.1;
            filter: brightness(0.3) contrast(0.7) saturate(0.8) hue-rotate(360deg) blur(3px);
            box-shadow: 0 0 5px rgba(147, 51, 234, 0.2), 0 0 10px rgba(6, 182, 212, 0.2);
          }
        }
        
        /* 3D Sphere Animations */
        @keyframes sphere-rotate-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1);
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          }
          25% {
            transform: rotateX(90deg) rotateY(90deg) rotateZ(90deg) scale3d(1.1, 1.1, 1.1);
            background: linear-gradient(135deg, #8b5cf6, #ec4899);
          }
          50% {
            transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg) scale3d(1.2, 1.2, 1.2);
            background: linear-gradient(225deg, #ec4899, #f59e0b);
          }
          75% {
            transform: rotateX(270deg) rotateY(270deg) rotateZ(270deg) scale3d(1.1, 1.1, 1.1);
            background: linear-gradient(315deg, #f59e0b, #3b82f6);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg) scale3d(1, 1, 1);
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          }
        }
        
        @keyframes sphere-orbit-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) translateZ(0px);
          }
          25% {
            transform: rotateX(45deg) rotateY(90deg) translateX(100px) translateY(-50px) translateZ(50px);
          }
          50% {
            transform: rotateX(90deg) rotateY(180deg) translateX(0px) translateY(-100px) translateZ(100px);
          }
          75% {
            transform: rotateX(135deg) rotateY(270deg) translateX(-100px) translateY(-50px) translateZ(50px);
          }
          100% {
            transform: rotateX(180deg) rotateY(360deg) translateX(0px) translateY(0px) translateZ(0px);
          }
        }
        
        @keyframes sphere-morph-3d {
          0%, 100% {
            border-radius: 50%;
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg);
            filter: blur(0px);
          }
          25% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            transform: scale3d(1.3, 0.7, 1.2) rotateX(45deg) rotateY(90deg);
            filter: blur(2px);
          }
          50% {
            border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
            transform: scale3d(0.7, 1.3, 0.8) rotateX(90deg) rotateY(180deg);
            filter: blur(4px);
          }
          75% {
            border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
            transform: scale3d(1.2, 0.8, 1.1) rotateX(135deg) rotateY(270deg);
            filter: blur(2px);
          }
        }
        
        /* Pyramid Animations */
        @keyframes pyramid-spin-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
            opacity: 0.4;
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(45deg) translateZ(30px);
            opacity: 0.6;
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(90deg) translateZ(60px);
            opacity: 0.8;
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(135deg) translateZ(30px);
            opacity: 0.6;
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(180deg) translateZ(0px);
            opacity: 0.4;
          }
        }
        
        @keyframes pyramid-float-3d {
          0%, 100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            filter: brightness(1) contrast(1);
          }
          25% {
            transform: translateY(-40px) translateX(30px) translateZ(80px) rotateX(45deg) rotateY(90deg) rotateZ(45deg);
            filter: brightness(1.3) contrast(1.2);
          }
          50% {
            transform: translateY(-80px) translateX(-30px) translateZ(160px) rotateX(90deg) rotateY(180deg) rotateZ(90deg);
            filter: brightness(1.6) contrast(1.4);
          }
          75% {
            transform: translateY(-40px) translateX(-60px) translateZ(80px) rotateX(135deg) rotateY(270deg) rotateZ(135deg);
            filter: brightness(1.3) contrast(1.2);
          }
        }
        
        @keyframes pyramid-glow-3d {
          0%, 100% {
            box-shadow: 0 0 30px rgba(236, 72, 153, 0.6), inset 0 0 30px rgba(236, 72, 153, 0.3);
            background: linear-gradient(45deg, rgba(236, 72, 153, 0.8), rgba(139, 92, 246, 0.8));
          }
          25% {
            box-shadow: 0 0 60px rgba(236, 72, 153, 0.8), inset 0 0 60px rgba(236, 72, 153, 0.5);
            background: linear-gradient(135deg, rgba(236, 72, 153, 0.9), rgba(139, 92, 246, 0.9));
          }
          50% {
            box-shadow: 0 0 90px rgba(236, 72, 153, 1), inset 0 0 90px rgba(236, 72, 153, 0.7);
            background: linear-gradient(225deg, rgba(236, 72, 153, 1), rgba(139, 92, 246, 1));
          }
          75% {
            box-shadow: 0 0 60px rgba(236, 72, 153, 0.8), inset 0 0 60px rgba(236, 72, 153, 0.5);
            background: linear-gradient(315deg, rgba(236, 72, 153, 0.9), rgba(139, 92, 246, 0.9));
          }
        }
        
        /* Torus Ring Animations */
        @keyframes torus-rotate-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 0.3);
            border-radius: 50%;
            opacity: 0.7;
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(45deg) scale3d(1.1, 1.1, 0.4);
            border-radius: 45% 55% 55% 45% / 45% 45% 55% 55%;
            opacity: 0.8;
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(90deg) scale3d(1.2, 1.2, 0.5);
            border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
            opacity: 0.9;
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(135deg) scale3d(1.1, 1.1, 0.4);
            border-radius: 45% 55% 55% 45% / 45% 45% 55% 55%;
            opacity: 0.8;
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(180deg) scale3d(1, 1, 0.3);
            border-radius: 50%;
            opacity: 0.7;
          }
        }
        
        @keyframes torus-pulse-3d {
          0%, 100% {
            transform: scale3d(1, 1, 0.3) rotateX(0deg) rotateY(0deg);
            box-shadow: 0 0 40px rgba(245, 158, 11, 0.6), inset 0 0 40px rgba(245, 158, 11, 0.3);
            background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.8), rgba(236, 72, 153, 0.6));
          }
          25% {
            transform: scale3d(1.3, 1.3, 0.5) rotateX(90deg) rotateY(45deg);
            box-shadow: 0 0 80px rgba(245, 158, 11, 0.8), inset 0 0 80px rgba(245, 158, 11, 0.5);
            background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.9), rgba(236, 72, 153, 0.8));
          }
          50% {
            transform: scale3d(1.6, 1.6, 0.7) rotateX(180deg) rotateY(90deg);
            box-shadow: 0 0 120px rgba(245, 158, 11, 1), inset 0 0 120px rgba(245, 158, 11, 0.7);
            background: radial-gradient(ellipse at center, rgba(245, 158, 11, 1), rgba(236, 72, 153, 1));
          }
          75% {
            transform: scale3d(1.3, 1.3, 0.5) rotateX(270deg) rotateY(135deg);
            box-shadow: 0 0 80px rgba(245, 158, 11, 0.8), inset 0 0 80px rgba(245, 158, 11, 0.5);
            background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.9), rgba(236, 72, 153, 0.8));
          }
        }
        
        @keyframes torus-orbit-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px);
          }
          25% {
            transform: rotateX(45deg) rotateY(90deg) rotateZ(45deg) translateX(150px) translateY(-75px) translateZ(75px);
          }
          50% {
            transform: rotateX(90deg) rotateY(180deg) rotateZ(90deg) translateX(0px) translateY(-150px) translateZ(150px);
          }
          75% {
            transform: rotateX(135deg) rotateY(270deg) rotateZ(135deg) translateX(-150px) translateY(-75px) translateZ(75px);
          }
          100% {
            transform: rotateX(180deg) rotateY(360deg) rotateZ(180deg) translateX(0px) translateY(0px) translateZ(0px);
          }
        }
        
        /* Hexagon Animations */
        @keyframes hexagon-rotate-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1);
            clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
            opacity: 0.6;
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(45deg) scale3d(1.1, 1.1, 1.1);
            clip-path: polygon(25% 5%, 75% 5%, 95% 25%, 95% 75%, 75% 95%, 25% 95%, 5% 75%, 5% 25%);
            opacity: 0.7;
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(90deg) scale3d(1.2, 1.2, 1.2);
            clip-path: polygon(20% 10%, 80% 10%, 90% 20%, 90% 80%, 80% 90%, 20% 90%, 10% 80%, 10% 20%);
            opacity: 0.8;
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(135deg) scale3d(1.1, 1.1, 1.1);
            clip-path: polygon(25% 5%, 75% 5%, 95% 25%, 95% 75%, 75% 95%, 25% 95%, 5% 75%, 5% 25%);
            opacity: 0.7;
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(180deg) scale3d(1, 1, 1);
            clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
            opacity: 0.6;
          }
        }
        
        @keyframes hexagon-morph-3d {
          0%, 100% {
            clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg);
            background: linear-gradient(45deg, #10b981, #3b82f6);
          }
          25% {
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
            transform: scale3d(1.2, 0.8, 1.1) rotateX(45deg) rotateY(90deg);
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          }
          50% {
            clip-path: polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%);
            transform: scale3d(0.8, 1.2, 0.9) rotateX(90deg) rotateY(180deg);
            background: linear-gradient(225deg, #8b5cf6, #ec4899);
          }
          75% {
            clip-path: polygon(40% 0%, 60% 0%, 100% 40%, 100% 60%, 60% 100%, 40% 100%, 0% 60%, 0% 40%);
            transform: scale3d(1.1, 0.9, 1.2) rotateX(135deg) rotateY(270deg);
            background: linear-gradient(315deg, #ec4899, #10b981);
          }
        }
        
        @keyframes hexagon-glow-3d {
          0%, 100% {
            box-shadow: 0 0 50px rgba(16, 185, 129, 0.7), inset 0 0 50px rgba(16, 185, 129, 0.4);
            background: radial-gradient(polygon at center, rgba(16, 185, 129, 0.9), rgba(59, 130, 246, 0.7));
            filter: brightness(1) saturate(1);
          }
          25% {
            box-shadow: 0 0 100px rgba(16, 185, 129, 0.9), inset 0 0 100px rgba(16, 185, 129, 0.6);
            background: radial-gradient(polygon at center, rgba(16, 185, 129, 1), rgba(59, 130, 246, 0.9));
            filter: brightness(1.3) saturate(1.2);
          }
          50% {
            box-shadow: 0 0 150px rgba(16, 185, 129, 1), inset 0 0 150px rgba(16, 185, 129, 0.8);
            background: radial-gradient(polygon at center, rgba(16, 185, 129, 1), rgba(59, 130, 246, 1));
            filter: brightness(1.6) saturate(1.4);
          }
          75% {
            box-shadow: 0 0 100px rgba(16, 185, 129, 0.9), inset 0 0 100px rgba(16, 185, 129, 0.6);
            background: radial-gradient(polygon at center, rgba(16, 185, 129, 1), rgba(59, 130, 246, 0.9));
            filter: brightness(1.3) saturate(1.2);
          }
        }
        
        /* Particle System Animations */
        @keyframes particle-float-3d {
          0%, 100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) scale3d(1, 1, 1);
            opacity: 0.3;
            filter: blur(1px);
          }
          25% {
            transform: translateY(-50px) translateX(30px) translateZ(100px) scale3d(1.2, 1.2, 1.2);
            opacity: 0.5;
            filter: blur(0.5px);
          }
          50% {
            transform: translateY(-100px) translateX(-30px) translateZ(200px) scale3d(1.5, 1.5, 1.5);
            opacity: 0.7;
            filter: blur(0px);
          }
          75% {
            transform: translateY(-50px) translateX(-60px) translateZ(100px) scale3d(1.2, 1.2, 1.2);
            opacity: 0.5;
            filter: blur(0.5px);
          }
        }
        
        @keyframes particle-swarm-3d {
          0% {
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translateX(80px) translateY(-60px) translateZ(120px) rotateX(90deg) rotateY(45deg) rotateZ(45deg);
            opacity: 0.6;
          }
          50% {
            transform: translateX(0px) translateY(-120px) translateZ(240px) rotateX(180deg) rotateY(90deg) rotateZ(90deg);
            opacity: 0.8;
          }
          75% {
            transform: translateX(-80px) translateY(-60px) translateZ(120px) rotateX(270deg) rotateY(135deg) rotateZ(135deg);
            opacity: 0.6;
          }
          100% {
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(360deg) rotateY(180deg) rotateZ(180deg);
            opacity: 0.4;
          }
        }
        
        @keyframes particle-pulse-3d {
          0%, 100% {
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
            background: radial-gradient(circle, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.7));
          }
          25% {
            transform: scale3d(1.5, 1.5, 1.5) rotateX(90deg) rotateY(45deg) rotateZ(45deg);
            box-shadow: 0 0 30px rgba(59, 130, 246, 1);
            background: radial-gradient(circle, rgba(59, 130, 246, 1), rgba(139, 92, 246, 0.9));
          }
          50% {
            transform: scale3d(2, 2, 2) rotateX(180deg) rotateY(90deg) rotateZ(90deg);
            box-shadow: 0 0 50px rgba(59, 130, 246, 1);
            background: radial-gradient(circle, rgba(59, 130, 246, 1), rgba(139, 92, 246, 1));
          }
          75% {
            transform: scale3d(1.5, 1.5, 1.5) rotateX(270deg) rotateY(135deg) rotateZ(135deg);
            box-shadow: 0 0 30px rgba(59, 130, 246, 1);
            background: radial-gradient(circle, rgba(59, 130, 246, 1), rgba(139, 92, 246, 0.9));
          }
        }
        
        /* Lightning Effect Animations */
        @keyframes lightning-strike-3d {
          0%, 90%, 100% {
            opacity: 0;
            transform: scaleY(0) rotateX(0deg) rotateY(0deg);
            filter: brightness(1);
          }
          5% {
            opacity: 1;
            transform: scaleY(1) rotateX(45deg) rotateY(90deg);
            filter: brightness(2);
          }
          10% {
            opacity: 0.8;
            transform: scaleY(0.8) rotateX(90deg) rotateY(135deg);
            filter: brightness(1.5);
          }
          15% {
            opacity: 1;
            transform: scaleY(1.2) rotateX(135deg) rotateY(180deg);
            filter: brightness(2.5);
          }
          20% {
            opacity: 0.6;
            transform: scaleY(0.6) rotateX(180deg) rotateY(225deg);
            filter: brightness(1.2);
          }
        }
        
        @keyframes lightning-glow-3d {
          0%, 85%, 100% {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(59, 130, 246, 0.8));
            filter: brightness(1) contrast(1);
          }
          5% {
            box-shadow: 0 0 50px rgba(255, 255, 255, 1);
            background: linear-gradient(45deg, rgba(255, 255, 255, 1), rgba(59, 130, 246, 1));
            filter: brightness(3) contrast(2);
          }
          10% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.9);
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.95), rgba(59, 130, 246, 0.9));
            filter: brightness(2) contrast(1.5);
          }
          15% {
            box-shadow: 0 0 80px rgba(255, 255, 255, 1);
            background: linear-gradient(45deg, rgba(255, 255, 255, 1), rgba(59, 130, 246, 1));
            filter: brightness(4) contrast(3);
          }
          20% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.85);
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(59, 130, 246, 0.85));
            filter: brightness(1.5) contrast(1.2);
          }
        }
        
        /* Grid Pattern Animations */
        @keyframes grid-move-3d {
          0% {
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg);
            opacity: 0.3;
            filter: hue-rotate(0deg);
          }
          25% {
            transform: translateX(100px) translateY(-50px) translateZ(200px) rotateX(45deg) rotateY(90deg);
            opacity: 0.5;
            filter: hue-rotate(90deg);
          }
          50% {
            transform: translateX(0px) translateY(-100px) translateZ(400px) rotateX(90deg) rotateY(180deg);
            opacity: 0.7;
            filter: hue-rotate(180deg);
          }
          75% {
            transform: translateX(-100px) translateY(-50px) translateZ(200px) rotateX(135deg) rotateY(270deg);
            opacity: 0.5;
            filter: hue-rotate(270deg);
          }
          100% {
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(180deg) rotateY(360deg);
            opacity: 0.3;
            filter: hue-rotate(360deg);
          }
        }
        
        @keyframes grid-pulse-3d {
          0%, 100% {
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg);
            background-size: 20px 20px;
            opacity: 0.4;
          }
          25% {
            transform: scale3d(1.2, 1.2, 1.2) rotateX(90deg) rotateY(45deg);
            background-size: 25px 25px;
            opacity: 0.6;
          }
          50% {
            transform: scale3d(1.5, 1.5, 1.5) rotateX(180deg) rotateY(90deg);
            background-size: 30px 30px;
            opacity: 0.8;
          }
          75% {
            transform: scale3d(1.2, 1.2, 1.2) rotateX(270deg) rotateY(135deg);
            background-size: 25px 25px;
            opacity: 0.6;
          }
        }
        
        @keyframes grid-morph-3d {
          0%, 100% {
            background-image: 
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px);
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
          }
          25% {
            background-image: 
              linear-gradient(rgba(139, 92, 246, 0.5) 2px, transparent 2px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.5) 2px, transparent 2px);
            transform: perspective(1000px) rotateX(45deg) rotateY(90deg);
          }
          50% {
            background-image: 
              linear-gradient(rgba(236, 72, 153, 0.7) 3px, transparent 3px),
              linear-gradient(90deg, rgba(236, 72, 153, 0.7) 3px, transparent 3px);
            transform: perspective(1000px) rotateX(90deg) rotateY(180deg);
          }
          75% {
            background-image: 
              linear-gradient(rgba(245, 158, 11, 0.5) 2px, transparent 2px),
              linear-gradient(90deg, rgba(245, 158, 11, 0.5) 2px, transparent 2px);
            transform: perspective(1000px) rotateX(135deg) rotateY(270deg);
          }
        }
        
        /* Mouse Follower Animations */
        @keyframes mouse-follower-3d-1 {
          0% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(1, 1, 1);
            opacity: 0.6;
            filter: blur(0px) hue-rotate(0deg);
          }
          25% {
            transform: translateX(30px) translateY(-20px) translateZ(50px) scale3d(1.1, 1.1, 1.1);
            opacity: 0.7;
            filter: blur(1px) hue-rotate(90deg);
          }
          50% {
            transform: translateX(60px) translateY(-40px) translateZ(100px) scale3d(1.2, 1.2, 1.2);
            opacity: 0.8;
            filter: blur(2px) hue-rotate(180deg);
          }
          75% {
            transform: translateX(30px) translateY(-20px) translateZ(50px) scale3d(1.1, 1.1, 1.1);
            opacity: 0.7;
            filter: blur(1px) hue-rotate(270deg);
          }
          100% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(1, 1, 1);
            opacity: 0.6;
            filter: blur(0px) hue-rotate(360deg);
          }
        }
        
        @keyframes mouse-follower-3d-2 {
          0% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(0.8, 0.8, 0.8) rotateX(0deg) rotateY(0deg);
            opacity: 0.5;
            background: radial-gradient(circle, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.6));
          }
          25% {
            transform: translateX(-40px) translateY(30px) translateZ(80px) scale3d(0.9, 0.9, 0.9) rotateX(90deg) rotateY(45deg);
            opacity: 0.6;
            background: radial-gradient(circle, rgba(236, 72, 153, 0.9), rgba(245, 158, 11, 0.7));
          }
          50% {
            transform: translateX(-80px) translateY(60px) translateZ(160px) scale3d(1, 1, 1) rotateX(180deg) rotateY(90deg);
            opacity: 0.7;
            background: radial-gradient(circle, rgba(245, 158, 11, 1), rgba(16, 185, 129, 0.8));
          }
          75% {
            transform: translateX(-40px) translateY(30px) translateZ(80px) scale3d(0.9, 0.9, 0.9) rotateX(270deg) rotateY(135deg);
            opacity: 0.6;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.9), rgba(59, 130, 246, 0.7));
          }
          100% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(0.8, 0.8, 0.8) rotateX(360deg) rotateY(180deg);
            opacity: 0.5;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.6));
          }
        }
        
        @keyframes mouse-follower-3d-3 {
          0% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(1.2, 1.2, 1.2) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 0.4;
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
          }
          25% {
            transform: translateX(50px) translateY(-30px) translateZ(120px) scale3d(1.3, 1.3, 1.3) rotateX(45deg) rotateY(90deg) rotateZ(45deg);
            opacity: 0.5;
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.8);
          }
          50% {
            transform: translateX(100px) translateY(-60px) translateZ(240px) scale3d(1.4, 1.4, 1.4) rotateX(90deg) rotateY(180deg) rotateZ(90deg);
            opacity: 0.6;
            box-shadow: 0 0 60px rgba(236, 72, 153, 1);
          }
          75% {
            transform: translateX(50px) translateY(-30px) translateZ(120px) scale3d(1.3, 1.3, 1.3) rotateX(135deg) rotateY(270deg) rotateZ(135deg);
            opacity: 0.5;
            box-shadow: 0 0 40px rgba(245, 158, 11, 0.8);
          }
          100% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(1.2, 1.2, 1.2) rotateX(180deg) rotateY(360deg) rotateZ(180deg);
            opacity: 0.4;
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
          }
        }
        
        /* Advanced Orb Animations */
        @keyframes orb-float-3d-advanced {
          0%, 100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            filter: blur(0px) brightness(1) saturate(1) hue-rotate(0deg);
            opacity: 0.8;
          }
          12.5% {
            transform: translateY(-40px) translateX(60px) translateZ(120px) scale3d(1.1, 1.1, 1.1) rotateX(45deg) rotateY(90deg) rotateZ(45deg);
            filter: blur(1px) brightness(1.2) saturate(1.1) hue-rotate(45deg);
            opacity: 0.85;
          }
          25% {
            transform: translateY(-80px) translateX(120px) translateZ(240px) scale3d(1.2, 1.2, 1.2) rotateX(90deg) rotateY(180deg) rotateZ(90deg);
            filter: blur(2px) brightness(1.4) saturate(1.2) hue-rotate(90deg);
            opacity: 0.9;
          }
          37.5% {
            transform: translateY(-60px) translateX(180px) translateZ(180px) scale3d(1.3, 1.3, 1.3) rotateX(135deg) rotateY(270deg) rotateZ(135deg);
            filter: blur(1.5px) brightness(1.3) saturate(1.15) hue-rotate(135deg);
            opacity: 0.85;
          }
          50% {
            transform: translateY(-40px) translateX(240px) translateZ(120px) scale3d(1.4, 1.4, 1.4) rotateX(180deg) rotateY(360deg) rotateZ(180deg);
            filter: blur(1px) brightness(1.6) saturate(1.4) hue-rotate(180deg);
            opacity: 0.95;
          }
          62.5% {
            transform: translateY(-20px) translateX(180px) translateZ(60px) scale3d(1.3, 1.3, 1.3) rotateX(225deg) rotateY(450deg) rotateZ(225deg);
            filter: blur(0.5px) brightness(1.3) saturate(1.15) hue-rotate(225deg);
            opacity: 0.85;
          }
          75% {
            transform: translateY(0px) translateX(120px) translateZ(0px) scale3d(1.2, 1.2, 1.2) rotateX(270deg) rotateY(540deg) rotateZ(270deg);
            filter: blur(0px) brightness(1.2) saturate(1.1) hue-rotate(270deg);
            opacity: 0.8;
          }
          87.5% {
            transform: translateY(-20px) translateX(60px) translateZ(60px) scale3d(1.1, 1.1, 1.1) rotateX(315deg) rotateY(630deg) rotateZ(315deg);
            filter: blur(0.5px) brightness(1.1) saturate(1.05) hue-rotate(315deg);
            opacity: 0.75;
          }
        }
        
        @keyframes orb-pulse-3d-advanced {
          0%, 100% {
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            box-shadow: 
              0 0 30px rgba(59, 130, 246, 0.8),
              0 0 60px rgba(139, 92, 246, 0.6),
              0 0 90px rgba(236, 72, 153, 0.4),
              inset 0 0 30px rgba(59, 130, 246, 0.4);
            background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.7), rgba(236, 72, 153, 0.5));
            opacity: 0.9;
          }
          20% {
            transform: scale3d(1.3, 1.3, 1.3) rotateX(72deg) rotateY(72deg) rotateZ(72deg);
            box-shadow: 
              0 0 60px rgba(139, 92, 246, 0.9),
              0 0 120px rgba(236, 72, 153, 0.7),
              0 0 180px rgba(245, 158, 11, 0.5),
              inset 0 0 60px rgba(139, 92, 246, 0.5);
            background: radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 1), rgba(236, 72, 153, 0.8), rgba(245, 158, 11, 0.6));
            opacity: 0.95;
          }
          40% {
            transform: scale3d(1.6, 1.6, 1.6) rotateX(144deg) rotateY(144deg) rotateZ(144deg);
            box-shadow: 
              0 0 90px rgba(236, 72, 153, 1),
              0 0 180px rgba(245, 158, 11, 0.8),
              0 0 270px rgba(16, 185, 129, 0.6),
              inset 0 0 90px rgba(236, 72, 153, 0.6);
            background: radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 1), rgba(245, 158, 11, 0.9), rgba(16, 185, 129, 0.7));
            opacity: 1;
          }
          60% {
            transform: scale3d(1.4, 1.4, 1.4) rotateX(216deg) rotateY(216deg) rotateZ(216deg);
            box-shadow: 
              0 0 120px rgba(245, 158, 11, 0.9),
              0 0 240px rgba(16, 185, 129, 0.7),
              0 0 360px rgba(59, 130, 246, 0.5),
              inset 0 0 120px rgba(245, 158, 11, 0.7);
            background: radial-gradient(circle at 60% 60%, rgba(245, 158, 11, 1), rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.6));
            opacity: 0.95;
          }
          80% {
            transform: scale3d(1.2, 1.2, 1.2) rotateX(288deg) rotateY(288deg) rotateZ(288deg);
            box-shadow: 
              0 0 60px rgba(16, 185, 129, 0.8),
              0 0 120px rgba(59, 130, 246, 0.6),
              0 0 180px rgba(139, 92, 246, 0.4),
              inset 0 0 60px rgba(16, 185, 129, 0.4);
            background: radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.95), rgba(59, 130, 246, 0.75), rgba(139, 92, 246, 0.55));
            opacity: 0.9;
          }
        }
        
        /* Complex Wave Animations */
        @keyframes wave-complex-3d {
          0%, 100% {
            transform: 
              translateX(0px) translateY(0px) translateZ(0px)
              rotateX(0deg) rotateY(0deg) rotateZ(0deg)
              scale3d(1, 1, 1)
              skewX(0deg) skewY(0deg);
            opacity: 0.6;
            filter: blur(0px) brightness(1) contrast(1) saturate(1);
          }
          10% {
            transform: 
              translateX(20px) translateY(-15px) translateZ(40px)
              rotateX(36deg) rotateY(36deg) rotateZ(36deg)
              scale3d(1.1, 1.1, 1.1)
              skewX(5deg) skewY(-5deg);
            opacity: 0.65;
            filter: blur(0.5px) brightness(1.1) contrast(1.05) saturate(1.05);
          }
          20% {
            transform: 
              translateX(40px) translateY(-30px) translateZ(80px)
              rotateX(72deg) rotateY(72deg) rotateZ(72deg)
              scale3d(1.2, 1.2, 1.2)
              skewX(10deg) skewY(-10deg);
            opacity: 0.7;
            filter: blur(1px) brightness(1.2) contrast(1.1) saturate(1.1);
          }
          30% {
            transform: 
              translateX(60px) translateY(-45px) translateZ(120px)
              rotateX(108deg) rotateY(108deg) rotateZ(108deg)
              scale3d(1.3, 1.3, 1.3)
              skewX(15deg) skewY(-15deg);
            opacity: 0.75;
            filter: blur(1.5px) brightness(1.3) contrast(1.15) saturate(1.15);
          }
          40% {
            transform: 
              translateX(80px) translateY(-60px) translateZ(160px)
              rotateX(144deg) rotateY(144deg) rotateZ(144deg)
              scale3d(1.4, 1.4, 1.4)
              skewX(20deg) skewY(-20deg);
            opacity: 0.8;
            filter: blur(2px) brightness(1.4) contrast(1.2) saturate(1.2);
          }
          50% {
            transform: 
              translateX(100px) translateY(-75px) translateZ(200px)
              rotateX(180deg) rotateY(180deg) rotateZ(180deg)
              scale3d(1.5, 1.5, 1.5)
              skewX(25deg) skewY(-25deg);
            opacity: 0.85;
            filter: blur(2.5px) brightness(1.5) contrast(1.25) saturate(1.25);
          }
          60% {
            transform: 
              translateX(80px) translateY(-60px) translateZ(160px)
              rotateX(216deg) rotateY(216deg) rotateZ(216deg)
              scale3d(1.4, 1.4, 1.4)
              skewX(20deg) skewY(-20deg);
            opacity: 0.8;
            filter: blur(2px) brightness(1.4) contrast(1.2) saturate(1.2);
          }
          70% {
            transform: 
              translateX(60px) translateY(-45px) translateZ(120px)
              rotateX(252deg) rotateY(252deg) rotateZ(252deg)
              scale3d(1.3, 1.3, 1.3)
              skewX(15deg) skewY(-15deg);
            opacity: 0.75;
            filter: blur(1.5px) brightness(1.3) contrast(1.15) saturate(1.15);
          }
          80% {
            transform: 
              translateX(40px) translateY(-30px) translateZ(80px)
              rotateX(288deg) rotateY(288deg) rotateZ(288deg)
              scale3d(1.2, 1.2, 1.2)
              skewX(10deg) skewY(-10deg);
            opacity: 0.7;
            filter: blur(1px) brightness(1.2) contrast(1.1) saturate(1.1);
          }
          90% {
            transform: 
              translateX(20px) translateY(-15px) translateZ(40px)
              rotateX(324deg) rotateY(324deg) rotateZ(324deg)
              scale3d(1.1, 1.1, 1.1)
              skewX(5deg) skewY(-5deg);
            opacity: 0.65;
            filter: blur(0.5px) brightness(1.1) contrast(1.05) saturate(1.05);
          }
          @keyframes progress-fill {
            0% {
              width: 0%;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            100% {
              width: var(--progress-width, 75%);
              opacity: 1;
            }
          }

          /* Mobile-Optimized 3D Animations */
          @keyframes mobile-3d-pulse {
            0%, 100% {
              transform: scale(1) translateZ(0px);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.05) translateZ(10px);
              opacity: 1;
            }
          }

          @keyframes mobile-glow-effect {
            0%, 100% {
              box-shadow: 0 0 15px rgba(147, 51, 234, 0.4);
              filter: brightness(1);
            }
            50% {
              box-shadow: 0 0 30px rgba(147, 51, 234, 0.7), 0 0 45px rgba(59, 130, 246, 0.5);
              filter: brightness(1.1);
            }
          }

          @keyframes mobile-float-animation {
            0%, 100% {
              transform: translateY(0px) translateX(0px) rotateZ(0deg);
            }
            25% {
              transform: translateY(-5px) translateX(3px) rotateZ(1deg);
            }
            50% {
              transform: translateY(-8px) translateX(0px) rotateZ(0deg);
            }
            75% {
              transform: translateY(-5px) translateX(-3px) rotateZ(-1deg);
            }
          }

          @keyframes mobile-data-flow {
            0% {
              transform: translateY(100%) translateX(0) scale(0.8);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            50% {
              transform: translateY(0%) translateX(10px) scale(1);
              opacity: 1;
            }
            90% {
              opacity: 0.3;
            }
            100% {
              transform: translateY(-100%) translateX(0) scale(0.8);
              opacity: 0;
            }
          }

          @keyframes mobile-metric-glow {
            0%, 100% {
              background: linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1));
              border-color: rgba(147, 51, 234, 0.3);
            }
            50% {
              background: linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2));
              border-color: rgba(147, 51, 234, 0.6);
              box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
            }
          }

          /* Touch-optimized hover effects */
          @media (hover: hover) {
            .mobile-touch-card:hover {
              transform: scale(1.02) translateY(-2px);
              box-shadow: 0 10px 30px rgba(147, 51, 234, 0.3);
            }
          }

          /* Reduce motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .mobile-3d-pulse,
            .mobile-glow-effect,
            .mobile-float-animation,
            .mobile-data-flow,
            .mobile-metric-glow {
              animation: none;
            }
          }

          /* Enhanced 3D Metrics Animations */
          @keyframes enhanced-metric-pulse {
            0%, 100% {
              transform: scale(1) rotateX(0deg) rotateY(0deg) translateZ(0px);
              box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
              filter: brightness(1) saturate(1);
            }
            25% {
              transform: scale(1.02) rotateX(2deg) rotateY(2deg) translateZ(5px);
              box-shadow: 0 0 30px rgba(147, 51, 234, 0.5);
              filter: brightness(1.05) saturate(1.1);
            }
            50% {
              transform: scale(1.05) rotateX(5deg) rotateY(5deg) translateZ(15px);
              box-shadow: 0 0 40px rgba(147, 51, 234, 0.7), 0 0 60px rgba(59, 130, 246, 0.4);
              filter: brightness(1.1) saturate(1.2);
            }
            75% {
              transform: scale(1.02) rotateX(2deg) rotateY(2deg) translateZ(5px);
              box-shadow: 0 0 30px rgba(147, 51, 234, 0.5);
              filter: brightness(1.05) saturate(1.1);
            }
          }

          @keyframes data-stream-flow {
            0% {
              transform: translateY(-100%) translateX(-20px) rotateZ(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            50% {
              transform: translateY(50%) translateX(20px) rotateZ(180deg);
              opacity: 1;
            }
            90% {
              opacity: 0.3;
            }
            100% {
              transform: translateY(200%) translateX(-20px) rotateZ(360deg);
              opacity: 0;
            }
          }

          @keyframes hologram-effect {
            0%, 100% {
              background: linear-gradient(45deg, transparent, rgba(147, 51, 234, 0.1), transparent);
              border-color: rgba(147, 51, 234, 0.4);
            }
            50% {
              background: linear-gradient(45deg, transparent, rgba(147, 51, 234, 0.3), transparent);
              border-color: rgba(147, 51, 234, 0.8);
              box-shadow: 
                0 0 30px rgba(147, 51, 234, 0.4),
                inset 0 0 20px rgba(147, 51, 234, 0.2);
            }
          }

          @keyframes particle-swarm {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 0.8;
            }
            33% {
              transform: translate(30px, -20px) scale(1.2);
              opacity: 0.6;
            }
            66% {
              transform: translate(-20px, 30px) scale(0.8);
              opacity: 0.4;
            }
            100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.8;
            }
          }

          /* Enhanced hover effects */
          .enhanced-metric-card {
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            transform-style: preserve-3d;
            perspective: 1000px;
          }

          .enhanced-metric-card:hover {
            transform: translateY(-8px) rotateX(5deg) rotateY(5deg) scale(1.02);
            box-shadow: 
              0 20px 40px rgba(147, 51, 234, 0.3),
              0 10px 20px rgba(59, 130, 246, 0.2),
              inset 0 0 30px rgba(147, 51, 234, 0.1);
          }

          /* Data visualization enhancements */
          .data-bar-animated {
            background: linear-gradient(180deg, 
              rgba(147, 51, 234, 0.9) 0%, 
              rgba(147, 51, 234, 0.6) 50%, 
              rgba(59, 130, 246, 0.4) 100%);
            box-shadow: 
              0 0 20px rgba(147, 51, 234, 0.5),
              inset 0 0 10px rgba(255, 255, 255, 0.2);
          }

          /* Mobile-specific performance optimizations */
          @media (max-width: 640px) {
            .enhanced-metric-card:hover {
              transform: translateY(-4px) scale(1.01);
            }
            
            .data-bar-animated {
              animation-duration: 3s;
            }
          }

          /* Mobile Image Optimizations */
          @media (max-width: 640px) {
            .hero-bg-image {
              background-attachment: scroll !important;
              background-position: center !important;
              background-size: cover !important;
            }
            
            .mobile-image-gallery {
              height: 300px !important;
            }
            
            .mobile-image-gallery img {
              object-fit: cover;
              object-position: center;
            }
            
            .mobile-controls {
              top: 1rem !important;
              left: 1rem !important;
              right: 1rem !important;
            }
            
            .mobile-nav-buttons {
              width: 2.5rem !important;
              height: 2.5rem !important;
            }
            
            .mobile-dots {
              bottom: 1rem !important;
            }
          }

          @media (min-width: 641px) and (max-width: 1024px) {
            .tablet-image-gallery {
              height: 450px !important;
            }
          }

          /* Professional image enhancements */
          .professional-image-overlay {
            background: linear-gradient(
              135deg,
              rgba(147, 51, 234, 0.1) 0%,
              rgba(59, 130, 246, 0.05) 50%,
              transparent 100%
            );
            mix-blend-mode: overlay;
          }

          .image-glow-effect {
            box-shadow: 
              0 0 30px rgba(147, 51, 234, 0.2),
              0 0 60px rgba(59, 130, 246, 0.1),
              inset 0 0 20px rgba(255, 255, 255, 0.05);
          }

          /* Professional Chart Animations */
          @keyframes chart-bar-grow {
            0% {
              height: 0%;
              opacity: 0;
              transform: translateY(100%);
            }
            20% {
              opacity: 0.8;
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes trend-line-draw {
            0% {
              stroke-dashoffset: 100;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }

          @keyframes data-point-pulse {
            0%, 100% {
              r: 3;
              opacity: 0.8;
            }
            50% {
              r: 5;
              opacity: 1;
            }
          }

          @keyframes chart-shine {
            0% {
              transform: translateX(-100%) translateY(-100%);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateX(100%) translateY(100%);
              opacity: 0;
            }
          }

          @keyframes grid-fade-in {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .professional-chart-bar {
            animation: chart-bar-grow 1.5s ease-out forwards;
            transform-origin: bottom;
          }

          .trend-line-animated {
            stroke-dasharray: 100;
            animation: trend-line-draw 2s ease-out forwards;
          }

          .data-point-animated {
            animation: data-point-pulse 2s ease-in-out infinite;
          }

          .chart-shine-effect {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
            animation: chart-shine 3s ease-in-out infinite;
            pointer-events: none;
          }

          .grid-lines-animated {
            animation: grid-fade-in 1s ease-out forwards;
          }

          /* Chart hover effects */
          .chart-bar-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .chart-bar-hover:hover {
            transform: translateY(-4px) scale(1.02);
            filter: brightness(1.2) saturate(1.1);
          }

          /* Mobile chart optimizations */
          @media (max-width: 640px) {
            .professional-chart-bar {
              animation-duration: 1s;
            }
            
            .trend-line-animated {
              animation-duration: 1.5s;
            }
          }
        `}</style>
    </div>
  );
};

export default Landing; 
