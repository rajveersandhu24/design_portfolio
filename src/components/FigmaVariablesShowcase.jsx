import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data structured into Figma-style sections
const themeColorSections = [
  {
    id: 'brand-colors',
    title: 'Brand Colors',
    items: [
      { name: 'brand_primary', light: '#3B7EDD', dark: '#3B7EDD', group: 'Brand Colors' },
      { name: 'brand_secondary', light: '#6C757D', dark: '#7B828A', group: 'Brand Colors' },
      { name: 'brand_primary_light', light: '#3B7EDD', lightOpacity: 10, dark: '#3B7EDD', darkOpacity: 10, group: 'Brand Colors' },
      { name: 'brand_secondar_light', light: '#6C757D', lightOpacity: 10, dark: '#7B828A', darkOpacity: 10, group: 'Brand Colors' }
    ]
  },
  {
    id: 'status-colors',
    title: 'Brand Colors / Status Colors',
    items: [
      { name: 'brand_success', light: '#1CBB8C', dark: '#1CBB8C', group: 'Brand Colors', subgroup: 'Status Colors' },
      { name: 'brand_danger', light: '#DC3545', dark: '#DC3545', group: 'Brand Colors', subgroup: 'Status Colors' },
      { name: 'brand_warning', light: '#E59D05', dark: '#FCB92B', group: 'Brand Colors', subgroup: 'Status Colors' },
      { name: 'brand_info', light: '#19A2B8', dark: '#19A2B8', group: 'Brand Colors', subgroup: 'Status Colors' },
      { name: 'brand_success_light', light: '#1CBB8C', lightOpacity: 10, dark: '#1CBB8C', darkOpacity: 10, group: 'Brand Colors', subgroup: 'Status Colors' },
      { name: 'brand_danger_light', light: '#DC3545', lightOpacity: 15, dark: '#DC3545', darkOpacity: 10, group: 'Brand Colors', subgroup: 'Status Colors' },
      { name: 'brand_warning_light', light: '#E59D05', lightOpacity: 10, dark: '#FCB92B', darkOpacity: 10, group: 'Brand Colors', subgroup: 'Status Colors' },
      { name: 'brand_info_light', light: '#19A2B8', lightOpacity: 10, dark: '#19A2B8', darkOpacity: 10, group: 'Brand Colors', subgroup: 'Status Colors' }
    ]
  },
  {
    id: 'navigation',
    title: 'Navigation',
    items: [
      { name: 'navbar_bg', light: '#FFFFFF', dark: '#222E3C', group: 'Navigation' },
      { name: 'sidebar_bg', light: '#222E3C', dark: '#222E3C', group: 'Navigation' },
      { name: 'sidebar_text', light: '#DEE2E6', dark: '#DEE2E6', group: 'Navigation' },
      { name: 'sidebar_hover_bg', light: '#2E63B3', lightOpacity: 8, dark: '#2E63B3', darkOpacity: 8, group: 'Navigation' }
    ]
  },
  {
    id: 'typography',
    title: 'Typography',
    items: [
      { name: 'text_primary', light: '#212529', dark: '#FFFFFF', group: 'Typography' },
      { name: 'text_muted', light: '#777C82', dark: '#D4D5D8', group: 'Typography' },
      { name: 'heading_color', light: '#212529', dark: '#FFFFFF', group: 'Typography' },
      { name: 'text_tertiary', light: '#949BA2', dark: '#979CA4', group: 'Typography' }
    ]
  },
  {
    id: 'background',
    title: 'Background',
    items: [
      { name: 'page_bg', light: '#F3F6FB', dark: '#19222C', group: 'Background' },
      { name: 'card_bg', light: '#FFFFFF', dark: '#222E3C', group: 'Background' },
      { name: 'modal_bg', light: '#FFFFFF', dark: '#222E3C', group: 'Background' },
      { name: 'Tertiary', light: '#F2F2F2', dark: '#212C39', group: 'Background' },
      { name: 'Text Highlight', light: '#FEF2D5', dark: '#FEF2D5', group: 'Background' }
    ]
  },
  {
    id: 'borders',
    title: 'Borders',
    items: [
      { name: 'border_color', light: '#DEE2E6', dark: '#4E5863', group: 'Borders' }
    ]
  },
  {
    id: 'action-button',
    title: 'Action Button',
    items: [
      { name: 'Primary Color', light: '#3B7EDD', dark: '#3B7EDD', group: 'Action Button' },
      { name: 'Primary Text', light: '#FFFFFF', dark: '#FFFFFF', group: 'Action Button' }
    ]
  }
];

const variablesCollectionSections = [
  {
    id: 'border-radius',
    title: 'Border Radius',
    items: [
      { name: 'Square', value: '4', type: 'radius', group: 'Border Radius' },
      { name: 'Rounded', value: '8', type: 'radius', group: 'Border Radius' },
      { name: 'Circular', value: '16', type: 'radius', group: 'Border Radius' }
    ]
  },
  {
    id: 'block-spacing',
    title: 'Block Spacing',
    items: [
      { name: 'Horizontal', value: '24', type: 'spacing', group: 'Block Spacing' },
      { name: 'Vertical', value: '24', type: 'spacing', group: 'Block Spacing' },
      { name: 'Gap', value: '24', type: 'spacing', group: 'Block Spacing' }
    ]
  },
  {
    id: 'font-weight',
    title: 'Font',
    items: [
      { name: 'Bold Font', value: 'Semi Bold', type: 'weight', group: 'Font' }
    ]
  },
  {
    id: 'large-heading-1',
    title: 'Font / Large Heading 1',
    items: [
      { name: 'Font Size', value: '40', type: 'size', group: 'Font', subgroup: 'Large Heading 1' },
      { name: 'Line Height', value: '48', type: 'size', group: 'Font', subgroup: 'Large Heading 1' }
    ]
  },
  {
    id: 'heading-1',
    title: 'Font / Heading 1',
    items: [
      { name: 'Font Size', value: '28', type: 'size', group: 'Font', subgroup: 'Heading 1' },
      { name: 'Line Height', value: '34', type: 'size', group: 'Font', subgroup: 'Heading 1' }
    ]
  },
  {
    id: 'heading-2',
    title: 'Font / Heading 2',
    items: [
      { name: 'Font Size', value: '25', type: 'size', group: 'Font', subgroup: 'Heading 2' },
      { name: 'Line Height', value: '30', type: 'size', group: 'Font', subgroup: 'Heading 2' }
    ]
  },
  {
    id: 'heading-3',
    title: 'Font / Heading 3',
    items: [
      { name: 'Font Size', value: '21', type: 'size', group: 'Font', subgroup: 'Heading 3' },
      { name: 'Line Height', value: '26', type: 'size', group: 'Font', subgroup: 'Heading 3' }
    ]
  },
  {
    id: 'heading-4',
    title: 'Font / Heading 4',
    items: [
      { name: 'Font Size', value: '18', type: 'size', group: 'Font', subgroup: 'Heading 4' },
      { name: 'Line Height', value: '22', type: 'size', group: 'Font', subgroup: 'Heading 4' }
    ]
  },
  {
    id: 'heading-5',
    title: 'Font / Heading 5',
    items: [
      { name: 'Font Size', value: '14', type: 'size', group: 'Font', subgroup: 'Heading 5' },
      { name: 'Line Height', value: '18', type: 'size', group: 'Font', subgroup: 'Heading 5' }
    ]
  },
  {
    id: 'heading-6',
    title: 'Font / Heading 6',
    items: [
      { name: 'Font Size', value: '12', type: 'size', group: 'Font', subgroup: 'Heading 6' },
      { name: 'Line Height', value: '16', type: 'size', group: 'Font', subgroup: 'Heading 6' }
    ]
  },
  {
    id: 'body-font',
    title: 'Font / Body',
    items: [
      { name: 'Font Size', value: '16', type: 'size', group: 'Font', subgroup: 'Body' },
      { name: 'Line Height', value: '20', type: 'size', group: 'Font', subgroup: 'Body' }
    ]
  }
];

const FigmaVariablesShowcase = () => {
  const [activeCollection, setActiveCollection] = useState('Theme Colors');
  const [activeGroup, setActiveGroup] = useState('All');
  const [activeSubgroup, setActiveSubgroup] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedToken, setCopiedToken] = useState(null);
  
  const scrollContainerRef = useRef(null);

  // Helper counts
  const totalThemeColors = themeColorSections.reduce((acc, sec) => acc + sec.items.length, 0);
  const totalVariables = variablesCollectionSections.reduce((acc, sec) => acc + sec.items.length, 0);

  // Clipboard copy
  const copyToClipboard = (text, displayName) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedToken(displayName);
      setTimeout(() => setCopiedToken(null), 1500);
    });
  };

  // Convert hex to RGBA
  const getRgbFromHex = (hex, opacity) => {
    if (!hex) return '';
    const cleanHex = hex.replace('#', '');
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  };

  // Sidebar mapping for configurations
  const collections = {
    'Theme Colors': {
      count: totalThemeColors,
      groups: [
        { name: 'All', count: totalThemeColors },
        { name: 'Brand Colors', count: 12,
          subgroups: [
            { name: 'Status Colors', count: 8 }
          ]
        },
        { name: 'Navigation', count: 4 },
        { name: 'Typography', count: 4 },
        { name: 'Background', count: 5 },
        { name: 'Borders', count: 1 },
        { name: 'Action Button', count: 2 }
      ]
    },
    'Variables Collection': {
      count: totalVariables,
      groups: [
        { name: 'All', count: totalVariables },
        { name: 'Border Radius', count: 3 },
        { name: 'Block Spacing', count: 3 },
        { name: 'Font', count: 17,
          subgroups: [
            { name: 'Large Heading 1', count: 2 },
            { name: 'Heading 1', count: 2 },
            { name: 'Heading 2', count: 2 },
            { name: 'Heading 3', count: 2 },
            { name: 'Heading 4', count: 2 },
            { name: 'Heading 5', count: 2 },
            { name: 'Heading 6', count: 2 },
            { name: 'Body', count: 2 }
          ]
        }
      ]
    }
  };

  // Active section list based on collection
  const sections = activeCollection === 'Theme Colors' ? themeColorSections : variablesCollectionSections;

  // Filter sections dynamically based on sidebar group selections
  const getVisibleSections = () => {
    if (activeGroup === 'All') return sections;

    return sections.filter(section => {
      if (activeCollection === 'Theme Colors') {
        if (activeGroup === 'Brand Colors') {
          if (activeSubgroup === 'Status Colors') {
            return section.id === 'status-colors';
          }
          return section.id === 'brand-colors' || section.id === 'status-colors';
        }
        if (activeGroup === 'Navigation') return section.id === 'navigation';
        if (activeGroup === 'Typography') return section.id === 'typography';
        if (activeGroup === 'Background') return section.id === 'background';
        if (activeGroup === 'Borders') return section.id === 'borders';
        if (activeGroup === 'Action Button') return section.id === 'action-button';
      } else {
        if (activeGroup === 'Border Radius') return section.id === 'border-radius';
        if (activeGroup === 'Block Spacing') return section.id === 'block-spacing';
        if (activeGroup === 'Font') {
          if (activeSubgroup) {
            if (activeSubgroup === 'Large Heading 1') return section.id === 'large-heading-1';
            if (activeSubgroup === 'Heading 1') return section.id === 'heading-1';
            if (activeSubgroup === 'Heading 2') return section.id === 'heading-2';
            if (activeSubgroup === 'Heading 3') return section.id === 'heading-3';
            if (activeSubgroup === 'Heading 4') return section.id === 'heading-4';
            if (activeSubgroup === 'Heading 5') return section.id === 'heading-5';
            if (activeSubgroup === 'Heading 6') return section.id === 'heading-6';
            if (activeSubgroup === 'Body') return section.id === 'body-font';
          }
          return ['font-weight', 'large-heading-1', 'heading-1', 'heading-2', 'heading-3', 'heading-4', 'heading-5', 'heading-6', 'body-font'].includes(section.id);
        }
      }
      return false;
    });
  };

  const visibleSections = getVisibleSections();

  // Reset scroll whenever filter changes (sidebar click or collection tab toggle)
  const handleSidebarClick = (groupName, subgroupName) => {
    setActiveGroup(groupName);
    setActiveSubgroup(subgroupName);
    const container = scrollContainerRef.current;
    if (container) container.scrollTop = 0;
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) container.scrollTop = 0;
  }, [activeCollection]);

  // Helper to render color preview block
  const renderColorSwatch = (hex, opacity) => {
    const background = opacity ? getRgbFromHex(hex, opacity) : hex;
    return (
      <div className="ds-color-swatch-container">
        {opacity && <div className="transparency-checkered-bg"></div>}
        <div 
          className="ds-color-swatch" 
          style={{ 
            backgroundColor: background,
            border: hex.toUpperCase() === '#FFFFFF' ? '1px solid var(--border-color)' : 'none'
          }}
        />
      </div>
    );
  };

  // Helper to render visual value preview for radius, spacing, fonts
  const renderValuePreview = (item) => {
    if (item.type === 'radius') {
      const radius = `${item.value}px`;
      return (
        <div className="ds-preview-radius-wrapper">
          <div className="ds-preview-radius-box" style={{ borderRadius: radius }} />
          <span className="ds-preview-label">{radius}</span>
        </div>
      );
    }
    
    if (item.type === 'spacing') {
      const size = `${item.value}px`;
      return (
        <div className="ds-preview-spacing-wrapper">
          <div className="ds-preview-spacing-bar" style={{ width: size, height: '12px' }} />
          <span className="ds-preview-label">{size}</span>
        </div>
      );
    }

    if (item.type === 'weight') {
      return (
        <div className="ds-preview-text-wrapper">
          <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Aa</span>
          <span className="ds-preview-label">{item.value}</span>
        </div>
      );
    }

    if (item.type === 'size') {
      const label = item.name === 'Font Size' ? 'Size' : 'Line-Ht';
      return (
        <div className="ds-preview-text-wrapper">
          <span 
            style={{ 
              fontSize: item.name === 'Font Size' ? `${Math.min(parseInt(item.value), 24)}px` : '14px',
              lineHeight: item.name === 'Line Height' ? `${Math.min(parseInt(item.value), 28)}px` : 'normal',
              color: 'var(--text-primary)',
              fontWeight: 500
            }}
          >
            Ag
          </span>
          <span className="ds-preview-label">{item.value}px <small style={{ opacity: 0.6 }}>({label})</small></span>
        </div>
      );
    }

    return <span className="ds-preview-label">{item.value}</span>;
  };

  // Count search hits
  let searchHits = 0;

  return (
    <div className="ds-variables-explorer" data-lenis-prevent="true">
      {/* Tab Selectors & Search Header */}
      <div className="ds-explorer-header">
        <div className="ds-explorer-tabs">
          {Object.keys(collections).map(colName => (
            <button
              key={colName}
              onClick={() => {
                setActiveCollection(colName);
              }}
              className={`ds-explorer-tab ${activeCollection === colName ? 'active' : ''}`}
            >
              {colName}
              <span className="ds-tab-badge">
                {collections[colName].count}
              </span>
            </button>
          ))}
        </div>
        
        {/* Search input */}
        <div className="ds-explorer-search">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search variables..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="search-clear-btn" onClick={() => setSearchQuery('')}>&times;</button>
          )}
        </div>
      </div>

      <div className="ds-explorer-body">
        {/* Sidebar menu panel */}
        <div className="ds-explorer-sidebar" data-lenis-prevent="true">
          <div className="sidebar-section">
            <span className="sidebar-section-title">Groups</span>
            <div className="sidebar-menu-list">
              {collections[activeCollection].groups.map(group => {
                const isGroupActive = activeGroup === group.name;
                const hasSubgroups = group.subgroups && group.subgroups.length > 0;
                
                return (
                  <div key={group.name} className="sidebar-menu-item-wrapper">
                    <button
                      onClick={() => handleSidebarClick(group.name, null)}
                      className={`sidebar-menu-item ${isGroupActive && !activeSubgroup ? 'active' : ''}`}
                    >
                      <span className="menu-item-label">
                        <svg className="group-folder-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        {group.name}
                      </span>
                      <span className="menu-item-badge">{group.count}</span>
                    </button>
                    
                    {/* Subgroups */}
                    {hasSubgroups && (
                      <div className="sidebar-subgroups-list">
                        {group.subgroups.map(subg => {
                          const isSubgActive = activeSubgroup === subg.name;
                          return (
                            <button
                              key={subg.name}
                              onClick={() => handleSidebarClick(group.name, subg.name)}
                              className={`sidebar-submenu-item ${isSubgActive ? 'active' : ''}`}
                            >
                              <span className="menu-item-label">
                                <span className="nested-arrow">&rarr;</span>
                                {subg.name}
                              </span>
                              <span className="menu-item-badge">{subg.count}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scrolling table container with Lenis preventative scrolling tag */}
        <div className="ds-explorer-content">
          <div 
            className="ds-table-scroll-container" 
            ref={scrollContainerRef}
            data-lenis-prevent="true"
          >
            <table className="ds-variables-table">
              <thead>
                {activeCollection === 'Theme Colors' ? (
                  <tr>
                    <th style={{ width: '40%' }}>Name</th>
                    <th style={{ width: '30%' }}>Light Theme</th>
                    <th style={{ width: '30%' }}>Dark Theme</th>
                  </tr>
                ) : (
                  <tr>
                    <th style={{ width: '60%' }}>Name</th>
                    <th style={{ width: '40%' }}>Value</th>
                  </tr>
                )}
              </thead>
              <tbody>
                {visibleSections.map(section => {
                  // Filter items within this section based on search query
                  const filteredItems = section.items.filter(item => 
                    item.name.toLowerCase().includes(searchQuery.toLowerCase())
                  );

                  if (filteredItems.length === 0) return null;
                  searchHits += filteredItems.length;

                  return (
                    <React.Fragment key={section.id}>
                      {/* Figma Section Group Header */}
                      <tr className="ds-table-section-header">
                        <td colSpan={activeCollection === 'Theme Colors' ? 3 : 2}>
                          {section.title}
                        </td>
                      </tr>
                      
                      {/* Section Items */}
                      {filteredItems.map((item, index) => {
                        const rowKey = `${section.id}-${item.name}-${index}`;
                        
                        if (activeCollection === 'Theme Colors') {
                          const lightValue = item.lightOpacity 
                            ? getRgbFromHex(item.light, item.lightOpacity) 
                            : item.light;
                          const darkValue = item.darkOpacity 
                            ? getRgbFromHex(item.dark, item.darkOpacity) 
                            : item.dark;

                          return (
                            <tr key={rowKey}>
                              <td className="var-name-cell">
                                <span className="figma-var-icon color-dot-icon"></span>
                                <div className="var-name-group">
                                  <span className="var-subgroup-label">{section.title}</span>
                                  <span className="var-name">{item.name}</span>
                                </div>
                              </td>
                              
                              {/* Light Theme swatch cell */}
                              <td 
                                className="color-val-cell"
                                onClick={() => copyToClipboard(lightValue, `${item.name}-light`)}
                              >
                                <div className="color-cell-content">
                                  {renderColorSwatch(item.light, item.lightOpacity)}
                                  <span className="hex-code">{item.light.replace('#', '')}</span>
                                  {item.lightOpacity && (
                                    <span className="opacity-badge">{item.lightOpacity}%</span>
                                  )}
                                </div>
                                <AnimatePresence>
                                  {copiedToken === `${item.name}-light` && (
                                    <motion.div 
                                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                      animate={{ opacity: 1, y: -24, scale: 1 }}
                                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                                      className="ds-copy-tooltip"
                                    >
                                      Copied!
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </td>

                              {/* Dark Theme swatch cell */}
                              <td 
                                className="color-val-cell"
                                onClick={() => copyToClipboard(darkValue, `${item.name}-dark`)}
                              >
                                <div className="color-cell-content">
                                  {renderColorSwatch(item.dark, item.darkOpacity)}
                                  <span className="hex-code">{item.dark.replace('#', '')}</span>
                                  {item.darkOpacity && (
                                    <span className="opacity-badge">{item.darkOpacity}%</span>
                                  )}
                                </div>
                                <AnimatePresence>
                                  {copiedToken === `${item.name}-dark` && (
                                    <motion.div 
                                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                      animate={{ opacity: 1, y: -24, scale: 1 }}
                                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                                      className="ds-copy-tooltip"
                                    >
                                      Copied!
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </td>
                            </tr>
                          );
                        } else {
                          // Variables Collection
                          return (
                            <tr key={rowKey}>
                              <td className="var-name-cell">
                                <span className={`figma-var-icon ${item.type}-icon`}></span>
                                <div className="var-name-group">
                                  <span className="var-subgroup-label">{section.title}</span>
                                  <span className="var-name">{item.name}</span>
                                </div>
                              </td>
                              
                              <td 
                                className="val-cell interactive"
                                onClick={() => copyToClipboard(item.value, item.name)}
                              >
                                <div className="val-cell-content">
                                  {renderValuePreview(item)}
                                </div>
                                <AnimatePresence>
                                  {copiedToken === item.name && (
                                    <motion.div 
                                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                      animate={{ opacity: 1, y: -24, scale: 1 }}
                                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                                      className="ds-copy-tooltip"
                                    >
                                      Copied!
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </td>
                            </tr>
                          );
                        }
                      })}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
            
            {/* Empty state when search returns no hits */}
            {searchHits === 0 && (
              <div className="ds-table-empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3, marginBottom: '16px' }}>
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <p>No variables found matching your query.</p>
                <button className="btn btn-secondary" onClick={() => { setSearchQuery(''); setActiveGroup('All'); setActiveSubgroup(null); }} style={{ marginTop: '12px', padding: '6px 16px', fontSize: '0.85rem' }}>
                  Reset Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaVariablesShowcase;
